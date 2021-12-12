import { TestBed } from '@angular/core/testing';

import { LoadEpisodeService } from './load-episode.service';

describe('LoadEpisodeService', () => {
  let service: LoadEpisodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadEpisodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
