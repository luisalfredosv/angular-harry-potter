import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IStaff } from 'src/app/shared/interfaces/staff.interface';
import { StaffService } from '../../services/staff.service';

@Component({
  selector: 'app-staff-page',
  templateUrl: './staff-page.component.html',
  styleUrls: ['./staff-page.component.css']
})
export class StaffPageComponent implements OnInit {

  constructor(private staffService: StaffService) { }

  listStaffs: Observable<IStaff[]> = of([]);

  ngOnInit(): void {
    this.getStaff()
  }

  getStaff():void {
    this.listStaffs = this.staffService.getStaff$()
  }

}
