import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Diary } from '../diary'

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

  newEntry = new Diary(0, "", "", new Date());
  @Output() addEntry = new EventEmitter<Diary>();

  submitEntry() {
    this.addEntry.emit(this.newEntry);
  }
  constructor() { }

  ngOnInit() {
  }

}
