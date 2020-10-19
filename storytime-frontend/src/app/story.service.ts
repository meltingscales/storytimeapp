import { Injectable } from '@angular/core';
import { Story } from './story';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { STORIES } from './mock-stories';

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
