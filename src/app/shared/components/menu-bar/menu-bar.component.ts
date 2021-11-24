import { Component, OnInit } from '@angular/core';

export interface MenuItem {
  label: string;
  icon: string;
  showOnMobile: boolean;
  showOnTablet: boolean;
  showOnDesktop: boolean;
}


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

  menuItems: MenuItem[] = [
    {
      label: 'Sign Up',
      icon: 'login',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'About',
      icon: 'help',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Pricing',
      icon: 'attach_money',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'Docs',
      icon: 'notes',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Showcase',
      icon: 'slideshow',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'Blog',
      icon: 'rss_feed',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    },
  ];
}
