import { Component, OnInit } from '@angular/core';
import { Story } from '../story';
import { STORIES } from '../mock-stories';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
})
export class StoriesComponent implements OnInit {
  stories = STORIES;

  selectedStory: Story;
  onSelect(story: Story): void {
    this.selectedStory = story;
  }

  constructor() {}

  ngOnInit(): void {}
}
