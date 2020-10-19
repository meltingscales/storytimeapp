import { Injectable } from '@angular/core';
import { Story } from './story';
import { Observable, of } from 'rxjs';
import { STORIES } from './mock-stories';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  constructor() {}

  getStories(): Observable<Story[]> {
    return of(STORIES);
  }
}
