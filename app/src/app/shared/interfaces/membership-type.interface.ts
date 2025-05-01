export interface TypeMembership {
    id: number;
    name: string;
    description: string;
    price: number;
    paymentFrequency: 'diario' | 'semanal' | 'mensual' | string; // puedes ajustar según las opciones válidas
    TB_client_membership: TypeMembership[];
  }
  