import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent implements OnInit {
  constructor() {}

  items: any[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        link: '/',
      },
      {
        label: 'Staff',
        icon: '',
        link: 'staff',
      },
      {
        label: 'Characters',
        icon: '',
        link: 'characters',
      },
      {
        label: 'Students',
        icon: '',
        link: 'students',
      },
    ];
  }
}
