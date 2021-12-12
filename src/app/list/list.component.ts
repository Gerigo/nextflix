import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  themes = ['For Christmas',  'Documentaries', 'Action and battle', 'To shed some tears', 'To watch with children'];

  constructor() { }

  ngOnInit(): void {
  }

}
