import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Story } from '../story';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
})
export class StoriesComponent implements OnInit {
  stories: Story[];
  selectedStory: Story;

  // By adding the parameter, it is automatically injected when the app runs.
  // Holy shit, just like Spring Boot!
  constructor(
    private storyService: StoryService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getStories();
  }

  onSelect(story: Story): void {
    this.selectedStory = story;
    this.messageService.add(
      `StoriesComponent: Selected story id='${story.id}', title='${story.title}'`
    );
  }

  // note: this is not called in the constructor because the constructor should not really do anything, especially not something that would send an HTTP request.
  // Instead, this is called in the ngOnInit lifecycle hook because
  getStories(): void {
    this.storyService
      .getStories()
      .subscribe((stories) => (this.stories = stories));
  }
}
