import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true
    });
  }


  skills = [
    { name: 'HTML', percent: 90 },
    { name: 'CSS', percent: 76 },
    { name: 'JavaScript', percent: 62 },
    { name: 'TypeScript', percent: 70 },
    { name: 'Angular', percent: 80 },
    { name: 'ASP.NET Core Web API', percent: 75 },
    { name: 'SQL', percent: 70 },
    { name: 'Git & GitHub', percent: 65 },
    { name: 'Postman', percent: 60 },
  ];

  
}
