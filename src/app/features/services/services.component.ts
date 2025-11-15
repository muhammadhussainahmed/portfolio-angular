import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

interface Service {
  icon: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
services: Service[] = [
  {
    icon: 'fa-solid fa-code',
    title: 'Web Development',
    desc: 'Building modern, fast, and scalable web applications using Angular and TypeScript.'
  },
  {
    icon: 'fa-solid fa-laptop-code',
    title: 'Frontend Design',
    desc: 'Creating responsive, pixel-perfect UI layouts using HTML, CSS, and Bootstrap.'
  },
  {
    icon: 'fa-solid fa-database',
    title: 'API Integration',
    desc: 'Connecting your frontend with real-world RESTful APIs and backend systems.'
  },
  {
    icon: 'fa-solid fa-mobile-screen',
    title: 'Responsive Design',
    desc: 'Ensuring your site looks and works great across all devices and screen sizes.'
  },
  {
    icon: 'fa-solid fa-lightbulb',
    title: 'UI/UX Consulting',
    desc: 'Designing user-centered interfaces that balance aesthetics with functionality.'
  },
  {
    icon: 'fa-solid fa-cloud',
    title: 'Deployment & Hosting',
    desc: 'Deploying projects on secure and fast hosting platforms for reliable performance.'
  },
  {
    icon: 'fa-solid fa-pencil',
    title: 'Adobe Illustrator & Photoshop',
    desc: 'Creating visually appealing UI designs, graphics, and digital assets with 1 year of hands-on experience.'
  }
];


  ngOnInit(): void {
    AOS.init({ duration: 1000, once: true });
  }
}
