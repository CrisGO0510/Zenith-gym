import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  signal,
  WritableSignal,
  inject,
} from '@angular/core';
import { ClientService } from '../../../../shared/services/client.service';
import { StorageService } from '../../../../core/services/storage/storage.service';
import { StorageKey } from '../../../../core/services/storage/storage.model';
import { Reservation } from '../../../../shared/interfaces/reservation.interface';
import { ReservationStatus } from '../../../../shared/interfaces/reservation-status.enum';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { Subscription } from 'rxjs';

export interface ChartDataPoint {
  name: Date;
  value: number;
}
export interface AttendanceData {
  date: Date;
  status: string;
}

@Component({
  selector: 'app-history-client',
  templateUrl: './history-client.component.html',
  styleUrls: ['./history-client.component.scss'],
  standalone: false,
})
export class HistoryClientComponent implements OnInit, OnDestroy {
  private clientService = inject(ClientService);
  private storage = inject(StorageService);

  private subscription$ = new Subscription();

  reservations: WritableSignal<Reservation[]> = signal([]);
  isLoading: WritableSignal<boolean> = signal(false);
  error: WritableSignal<string | null> = signal(null);

  // Gráfico
  chartData: { name: string; series: ChartDataPoint[] }[] = [];
  view: [number, number] = [900, 358];
  legend = false;
  xAxis = true;
  yAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Fecha';
  yAxisLabel = 'Estado';
  timeline = true;
  autoScale = true;
  colorScheme: Color = {
    name: 'statusColors',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#9E9E9E', '#4CAF50', '#F44336', '#FFC107'],
  };

  // Tabla
  tableData: AttendanceData[] = [];
  displayedColumns = ['date', 'status'];

  // Mapeo de estados a índice (coincide con el dominio de colors)
  private statusOrder: ReservationStatus[] = [
    ReservationStatus.ABSENT,
    ReservationStatus.COMPLETED,
    ReservationStatus.CANCELLED,
    ReservationStatus.PENDING,
  ];

  ngOnInit(): void {
    this.loadHistory();
  }

  private loadHistory(): void {
    this.isLoading.set(true);
    this.error.set(null);
    this.reservations.set([]);

    // Obtener id_user de la sesión (ajusta según tu implementación de StorageService)
    const session = this.storage.read(StorageKey.CURRENT_ROLE) as any;
    const id_user = session?.id_user;
    if (!id_user) {
      this.error.set('Usuario no autenticado');
      this.isLoading.set(false);
      return;
    }

    this.subscription$.add(
      this.clientService.getAllReservations(id_user).subscribe({
        next: (res) => {
          this.reservations.set(res);
          console.log(this.reservations());
          this.processChartData();
          this.processTableData();
          this.isLoading.set(false);
        },
        error: (err) => {
          console.error(err);
          this.error.set('Error al cargar el historial');
          this.isLoading.set(false);
        },
      })
    );
  }

  processChartData(): void {
    const currentReservations = this.reservations();
  
    if (!currentReservations || currentReservations.length === 0) {
      this.chartData = [];
      return;
    }
  
    // Agrupar por fecha (sin hora)
    const grouped = new Map<string, number>();
  
    currentReservations.forEach((res) => {
      const dateStr = new Date(res.start_time).toISOString().split('T')[0]; // YYYY-MM-DD
      const index = this.statusOrder.indexOf(res.status as ReservationStatus);
      const current = grouped.get(dateStr) ?? 0;
      grouped.set(dateStr, current + (index >= 0 ? index : 0));
    });
  
    // Convertir a formato de ngx-charts
    const series = Array.from(grouped.entries()).map(([dateStr, value]) => ({
      name: new Date(dateStr),
      value,
    }));
  
    this.chartData = [
      {
        name: 'Historial de asistencia',
        series,
      },
    ];
  }
  
  private processTableData(): void {
    const data = this.reservations();
    if (data.length === 0) {
      this.tableData = [];
      return;
    }

    // Ordenar descendente
    const sorted = [...data].sort(
      (a, b) =>
        new Date(b.start_time).getTime() - new Date(a.start_time).getTime()
    );

    this.tableData = sorted.map((r) => ({
      date: new Date(r.start_time),
      status: r.status,
    }));
  }

  yAxisTickFormatting = (val: number): string => {
    return this.statusOrder[val] ?? '';
  };

  public xAxisTickFormatting = (val: Date | string): string => {
    const date = typeof val === 'string' ? new Date(val) : val;
    const d = date.getDate().toString().padStart(2, '0');
    const m = (date.getMonth() + 1).toString().padStart(2, '0');
    return `${d}/${m}`;
  };

  onSelect(event: any): void {}
  onActivate(event: any): void {}
  onDeactivate(event: any): void {}

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
