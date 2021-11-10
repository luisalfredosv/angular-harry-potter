import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StaffService } from '../../services/staff.service';
@Component({
  selector: 'app-staff-page',
  templateUrl: './staff-page.component.html',
  styleUrls: ['./staff-page.component.css']
})
export class StaffPageComponent implements OnInit {

  constructor(private staffService: StaffService) { }

  listStaffs$: Observable<any> = of([]);

  ngOnInit(): void {
    this.getStaff()
  }

  getStaff():void {
    this.listStaffs$ = this.staffService.getStaff$()
  }

}
