import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.sass']
})
export class StoriesComponent implements OnInit {

  story = 'A really great story';

  constructor() { }

  ngOnInit(): void {
  }

}
