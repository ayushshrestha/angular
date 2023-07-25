import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
   Highcharts: typeof Highcharts = Highcharts;

   data1 = [500, 700, 555, 444, 777, 877, 944, 567, 666, 789, 456, 654];
   data2 = [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654];
   name1= "a";
 
   chartOptions: Highcharts.Options = {
     title: {
       text: "Nepse"
     },
     xAxis: {
       categories: [
         "11:00",
         "12:00",
         "Mar",
         "Apr",
         "May",
         "Jun",
         "Jul",
         "Aug",
         "Sep",
         "Oct",
         "Nov",
         "Dec"
       ]
     },
     yAxis: {
       title: {
         text: "Nepse"
       }
     },
     series: [
       {
         name: this.name1,
         type: "spline",
         data: this.data1
       },
       {
         type: "spline",
         data: this.data2,
         name: "b",
         color: "#3183F5"
       }
     ]
   };



   }

