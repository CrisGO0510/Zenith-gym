import { Component, OnInit } from '@angular/core';
import { MembershipsService } from './memberships.service';
import { TypeMembership } from '../../core/interfaces/membership-type.interface';

@Component({
  selector: 'app-memberships',
  standalone: false,
  templateUrl: './memberships.component.html',
  styleUrl: './memberships.component.scss'
})
export class MembershipsComponent implements OnInit {
  memberships: TypeMembership[] = [];

  constructor(private membershipsService: MembershipsService) {}

  ngOnInit(): void {
    this.getMemberships();
  }

  getMemberships(): void {
    this.membershipsService.getMemberships().subscribe((data) => {
      console.log('Memberships:', data);
      this.memberships = data;
    });
  }

}
