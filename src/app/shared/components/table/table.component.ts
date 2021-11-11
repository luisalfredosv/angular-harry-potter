import { Component, Input, OnInit } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';
import { IStaff } from '../../interfaces/staff.interface';
import { IStudent } from '../../interfaces/student.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() listData : ICharacter[] | IStaff[] |  IStudent[] = [];
  currentPage: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
