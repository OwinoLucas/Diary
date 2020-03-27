import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary'

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

  newEntry = new Diary(0, "", "", new Date());
  constructor() { }

  ngOnInit() {
  }

}
