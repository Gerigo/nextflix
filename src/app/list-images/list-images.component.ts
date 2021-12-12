import { Component, Input, OnInit } from '@angular/core';
import { LoadImagesService } from '../services/load-images.service';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent implements OnInit {

  @Input() theme: any;
  list: any[] = [];
  constructor(private loadImagesService: LoadImagesService) { }

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices() {
    switch(this.theme) {
      case 'For Christmas': this.list = this.loadImagesService.getChristmasImages(); break;
      case 'To watch with children': this.list = this.loadImagesService.getChildrenImages(); break;
      case 'Documentaries': this.list = this.loadImagesService.getAnimalsImages(); break;
      case 'Action and battle': this.list = this.loadImagesService.getActionsImages(); break;
      case 'To shed some tears': this.list = this.loadImagesService.getSadnessImages(); break;
    }
  }

}
