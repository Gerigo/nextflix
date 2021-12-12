import { Component, OnInit } from '@angular/core';
import { LoadEpisodeService } from '../services/load-episode.service';

@Component({
  selector: 'app-episode-info',
  templateUrl: './episode-info.component.html',
  styleUrls: ['./episode-info.component.css']
})
export class EpisodeInfoComponent implements OnInit {

  public clicked: boolean = false;
  episodes: any [] = []

  constructor(private loadEpisodeService: LoadEpisodeService) { }

  ngOnInit(): void {
    this.episodes = this.loadEpisodeService.episodes;
  }

  show(item: any) {
    item.visible = true;
    let elem = this.episodes.find((e) => e !== item && e.visible === true);
    if(elem) {
      elem.visible = false;
    };
  }

  isReference(item: any) {
    return item.index === 6;
  }

  isEpisode4(item: any) {
    return item.index === 4 && item.visible;
  }
}
