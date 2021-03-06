import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {

  weekdays : any;timeslots : any;timetable : any;

  constructor(private student:StudentService) { }

  ngOnInit(): void {
    let section = "A";
    if(sessionStorage.getItem('section')){
      section = sessionStorage.getItem('section');
    }
    this.student.getTimeTable(sessionStorage.getItem('instituteId'),sessionStorage.getItem('standard'),section).subscribe(
      (data:any)=>{
        console.log(data);
        this.weekdays = data[0].weekDays;
        this.timeslots = data[0].timeSlotsDTO;
        this.timetable = data[0].timeTableInfoDTO[0];
      }
    );
  }

}
