import { Component, Input, OnInit } from '@angular/core';
import { Responsibility } from 'src/app/models/responsibility';

@Component({
  selector: 'responsibility-item',
  templateUrl: './responsibility-item.component.html',
  styleUrls: ['./responsibility-item.component.css']
})
export class ResponsibilityItemComponent implements OnInit {
  @Input() responsibility: Responsibility = {
    id: 0,
    description: ""
  }

  constructor() { }

  ngOnInit(): void {

  }

}
