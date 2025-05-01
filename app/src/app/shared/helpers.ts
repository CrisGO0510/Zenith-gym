export function calculateEndDate(startDate: Date, frequency: string): Date {
    const endDate = new Date(startDate); // Copia para no mutar el original
  
    switch (frequency.toLowerCase()) {
      case 'diario':
        endDate.setDate(endDate.getDate() + 1);
        break;
      case 'semanal':
        endDate.setDate(endDate.getDate() + 7);
        break;
      case 'quincenal':
        endDate.setDate(endDate.getDate() + 15);
        break;
      case 'mensual':
        endDate.setMonth(endDate.getMonth() + 1);
        break;
      case 'bimestral':
        endDate.setMonth(endDate.getMonth() + 2);
        break;
      case 'trimestral':
        endDate.setMonth(endDate.getMonth() + 3);
        break;
      case 'semestral':
        endDate.setMonth(endDate.getMonth() + 6);
        break;
      case 'anual':
        endDate.setFullYear(endDate.getFullYear() + 1);
        break;
      default:
        throw new Error(`Frecuencia de pago no soportada: ${frequency}`);
    }
  
    return endDate;
  }
  