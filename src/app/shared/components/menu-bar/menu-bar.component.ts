import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent implements OnInit {
  constructor() {}

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/',
      },
      {
        label: 'Staff',
        icon: '',
        routerLink: 'staff',
      },
      {
        label: 'Characters',
        icon: '',
        routerLink: 'characters',
      },
      {
        label: 'Students',
        icon: '',
        routerLink: 'students',
      },
    ];
  }
}
