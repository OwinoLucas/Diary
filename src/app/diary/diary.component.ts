import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  diary: Diary[] = [new Diary(1, 'Entry one', 'Dear diary, Today i have a few activities. I want to watch the office, code my diary app and spotify new artists.', new Date(2020, 3, 14))];

  deleteEntry(isComplete, index) {
    if (isComplete) {
      let toDelete
    }
  }

  toggleEntry(index) {
    this.diary[index].showEntry = !this.diary[index].showEntry;
  }


  constructor() { }

  ngOnInit() {
  }

}
