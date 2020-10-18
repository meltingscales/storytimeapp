import { Component, OnInit } from '@angular/core';
import { Story } from '../story';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.sass'],
})
export class StoriesComponent implements OnInit {
  story: Story = {
    id: 0,
    title: "Best Story Ever",
    textContent: 'Once upon a time...',
    tags: ['fantasy', 'adventure'],
  };

  constructor() {}

  ngOnInit(): void {}
}
