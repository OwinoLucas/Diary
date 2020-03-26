import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysAgo'
})
export class DaysAgoPipe implements PipeTransform {

  transform(value: any): number {
    let today: Date = new Date();//get current date and time
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var daysAgo = Math.abs(todayWithNoTime - value);//to get how long its been since last entry..in milliseconds
    const secondsInDay = 86400;//60 sec * 60 minutes in an hour * 24 hrs
    var daysAgoSec = daysAgo * 0.001;//converts em to seconds
    var daysAgoNow = daysAgoSec / secondsInDay;//converts to days


    if (daysAgoNow >= 1 && todayWithNoTime > value) {
      return daysAgoNow;
    }
    else {
      return 0;
    }
  }

}

