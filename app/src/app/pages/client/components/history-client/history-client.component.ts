import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { Reservation } from '../../../../shared/interfaces/reservation.interface';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { Subscription } from 'rxjs';
import { HistoryClientService } from './history-client.service';
import { ReservationStatus } from '../../../../shared/interfaces/reservation-status.enum';

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
  reservations: WritableSignal<Reservation[]> = signal([]);
  isLoading: WritableSignal<boolean> = signal(false);
  error: WritableSignal<string | null> = signal(null);

  chartData: { name: string; series: ChartDataPoint[] }[] = [];
  view: [number, number] = [900, 358];
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Fecha';
  yAxisLabel: string = 'Estado de Reserva';
  timeline: boolean = true;
  autoScale: boolean = true;
  colorScheme: Color = {
    name: 'statusColors',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#9E9E9E', '#4CAF50', '#F44336', '#FFC107'],
  };

  tableData: AttendanceData[] = [];
  displayedColumns: string[] = ['date', 'status'];

  private historySubscription: Subscription = new Subscription();

  constructor(private historyClientService: HistoryClientService) {}

  ngOnInit(): void {
    this.loadHistory();
  }

  ngOnDestroy(): void {
    this.historySubscription?.unsubscribe();
  }

  loadHistory(): void {
    this.isLoading.set(true);
    this.error.set(null);
    this.reservations.set([]);
    this.chartData = [];
    this.tableData = [];

    const clientId = 123;

    this.historySubscription.add(
      this.historyClientService.getReservationHistory(clientId).subscribe({
        next: (reservations) => {
          this.reservations.set(reservations);
          this.processChartData();
          this.processTableData();
        },
        error: (err) => {
          console.error('Error al cargar historial:', err);
          this.error.set('Error al cargar historial');
        },
        complete: () => {
          this.isLoading.set(false);
        },
      }),
    );
  }

  processChartData(): void {
    const currentReservations = this.reservations();
    if (!currentReservations || currentReservations.length === 0) {
      this.chartData = [];
      return;
    }

    const sortedReservations = [...currentReservations].sort(
      (a, b) => a.start_time.getTime() - b.end_time.getTime(),
    );
    const seriesData: ChartDataPoint[] = sortedReservations.map((res) => ({
      name: new Date(res.start_time),
      value: 0, //TODO CORREGIR LUEGO
    }));
    this.chartData = [{ name: 'Historial', series: seriesData }];
  }

  processTableData(): void {
    const currentReservations = this.reservations();
    if (!currentReservations || currentReservations.length === 0) {
      this.tableData = [];
      return;
    }
    const sortedReservations = [...currentReservations].sort(
      (a, b) => b.start_time.getTime() - a.start_time.getTime(),
    );
    this.tableData = sortedReservations.map((res) => ({
      date: new Date(res.start_time),
      status: res.status
    }));
  }

  yAxisTickFormatting(val: number): string {
    return ReservationStatus.toLabel(val as ReservationStatus);
  }
  xAxisTickFormatting(val: Date | string): string {
    try {
      const dateVal = typeof val === 'string' ? new Date(val) : val;
      const day = dateVal.getDate().toString().padStart(2, '0');
      const month = (dateVal.getMonth() + 1).toString().padStart(2, '0');
      return `${day}/${month}`;
    } catch (e) {
      return '';
    }
  }

  onSelect(data: any): void {
    /* ... */
  }
  onActivate(data: any): void {
    /* ... */
  }
  onDeactivate(data: any): void {
    /* ... */
  }
}
