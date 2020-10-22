import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Story } from './story';
import { STORIES } from './mock-stories';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  constructor(private messageService: MessageService) {}

  getStories(): Observable<Story[]> {
    this.messageService.add('StoryService: Fetched Stories.');
    return of(STORIES);
  }
}
