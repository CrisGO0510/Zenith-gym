export enum ReservationStatus {
  COMPLETED = 3,
  PENDING = 2,
  CANCELLED = 1,
  ABSENT = 0
}

export namespace ReservationStatus {
  export function toLabel(status: ReservationStatus): string {
    switch (status) {
      case ReservationStatus.PENDING:
        return 'Pending';
      case ReservationStatus.COMPLETED:
        return 'Completed';
      case ReservationStatus.CANCELLED:
        return 'Cancelled';
      case ReservationStatus.ABSENT:
        return 'Absent';
      default:
        return 'Unknown';
    }
  }
}

