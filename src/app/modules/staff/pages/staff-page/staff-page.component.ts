import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StaffService } from '../../services/staff.service';
@Component({
  selector: 'app-staff-page',
  templateUrl: './staff-page.component.html',
  styleUrls: ['./staff-page.component.css']
})
export class StaffPageComponent implements OnInit {

  @Output() data: EventEmitter<any[]> = new EventEmitter<any[]>();
  constructor(private staffService: StaffService) { }

  listStaffs$: Observable<any> = of([]);

  ngOnInit(): void {
    this.getStaff()
  }

  getStaff():void {
    this.listStaffs$ = this.staffService.getStaff$();
  }

}
