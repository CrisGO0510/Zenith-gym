import { Component } from '@angular/core';
import { Client } from '../../../../core/interfaces/client.interface';

@Component({
  selector: 'app-home-client',
  standalone: false,
  templateUrl: './home-client.component.html',
  styleUrl: './home-client.component.scss',
})
export class HomeClientComponent {
  user: Client = {
    user_id: 1,
    name: 'John',
    lastname: 'Doe',
    email: 'cris@gmal.com',
    password: '123456',
    phone: '123456789',
    birthdate: new Date('1990-01-01'),
    client_id: 1,
    thirdPartyId: 1,
    id_membership: 1,
    startDate: new Date('2023-01-01'),
    endDate: new Date('2024-01-01'),
  };
  constructor() {}

}
