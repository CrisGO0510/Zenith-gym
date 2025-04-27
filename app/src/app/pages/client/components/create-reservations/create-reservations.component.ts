import { Component } from '@angular/core';
import { HeatMapData } from '../../../../core/interfaces/heat-map-data.interface';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-reservations',
  standalone: false,
  templateUrl: './create-reservations.component.html',
  styleUrl: './create-reservations.component.scss',
})
export class CreateReservationsComponent {
  calendarData: HeatMapData[] = [];
  view: [number, number] = [750, 400];

  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Hora';
  yAxisLabel: string = 'Día de la Semana';
  tooltipDisabled: boolean = false;

  colorScheme: Color = {
    name: 'zenithGreen',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#388e3c'],
  };

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.generateCalendarData();
  }

  generateCalendarData(): void {
    const days = [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo',
    ];

    const hours: string[] = [];
    for (let i = 8; i <= 20; i++) {
      hours.push(`${i.toString().padStart(2, '0')}:00`);
    }

    this.calendarData = days.map((day) => ({
      name: day,
      series: hours.map((hour) => ({
        name: hour,
        value: 1,
      })),
    }));
  }

  onSlotSelect(event: any): void {
    console.log('Slot seleccionado:', event);

    let day: string;
    let hour: string;

    if (typeof event.name === 'string' && typeof event.series === 'string') {
      day = event.name;
      hour = event.series;
    } else if (
      typeof event.name === 'string' &&
      typeof event.value?.name === 'string'
    ) {
      hour = event.name;
      day = event.value.name;
    } else {
      console.error('Estructura del evento inesperada:', event);

      day = event.name || 'Día desconocido';
      hour = event.series || event.value?.name || 'Hora desconocida';
    }

    const dialogData = {
      day: day,
      hour: hour,
    };

    //   const dialogRef = this.dialog.open(TimeSlotDialogComponent, {
    //     width: '300px',
    //     data: dialogData,
    //   });
    //
    //   dialogRef.afterClosed().subscribe((result) => {
    //     console.log('El diálogo se cerró', result);
    //   });
    console.log('Datos del diálogo:', dialogData);
  }
}
