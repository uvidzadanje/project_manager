import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UpdateResponsibilityDto } from 'src/app/dto/responsibility/responsibility.dto';
import { Responsibility } from 'src/app/models/responsibility';

@Component({
  selector: 'show-responsibility',
  templateUrl: './show-responsibility.component.html',
  styleUrls: ['./show-responsibility.component.css']
})
export class ShowResponsibilityComponent implements OnInit {

  constructor() { }

  @Input() responsibility: Responsibility = {
    id: 0,
    description: ""
  };

  isEdit: boolean = false;

  changes: UpdateResponsibilityDto = {};

  @Output() updateResponsibilityEmitter = new EventEmitter<{id:number, changes: UpdateResponsibilityDto}>();

  @Output() removeResponsibilityEmitter = new EventEmitter<{id: number}>();

  ngOnInit(): void {
  }

  remove()
  {
    this.removeResponsibilityEmitter.emit({id: this.responsibility.id});
  }

  update()
  {
    this.updateResponsibilityEmitter.emit({id: this.responsibility.id, changes: this.changes});
  }

  showEdit()
  {
    this.changes = {...this.responsibility};
    this.isEdit = true;
  }

  closeEdit()
  {
    this.isEdit = false;
  }

}
