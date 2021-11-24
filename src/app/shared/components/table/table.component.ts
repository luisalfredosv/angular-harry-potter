import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnChanges {
  dataSource = new MatTableDataSource();

  @Input() listData = [];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  pageSize: number = 4;
  pageNumber: number = 1;
  pageSizeOptions: number[] = [5, 10, 20, 50, 100];

  displayedColumns: string[] = [
    '#',
    'name',
    'species',
    'gender',
    'house',
    'dateOfBirth',
    'image',
  ];

  constructor() {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  handlePage(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageNumber = event.pageIndex + 1;
  }

  ngOnChanges() {
    if (this.listData) {
      this.dataSource.data = this.listData;
    }
  }

  getIndex(index: any){
   return index =
      this.paginator.pageIndex > 0
        ? index + this.paginator.pageIndex * this.paginator.pageSize
        : index + 1;
  }
}
