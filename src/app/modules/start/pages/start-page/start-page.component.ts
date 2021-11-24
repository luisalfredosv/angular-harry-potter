import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sections : {
    title: string;
    content: string;
    img: string;
    url: string
  }[] = [
    {
      title: 'Staff',
      content: 'List of characters that are part of Harry Potter',
      img: '',
      url: 'staff'
    },
    {
      title: 'Characters',
      content: 'Section where you can the Hogwarts houses and their members',
      img: '',
      url: 'characters'
    },
    {
      title: 'Students',
      content: 'All Hogwarts Academy students',
      img: '',
      url: 'students'
    }
  ]

}
