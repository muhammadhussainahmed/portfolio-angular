import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'E-Commerce Website',
      description: 'Angular + Bootstrap responsive shop layout',
      image: 'assets/commerce.jfif',
      link: 'https://example.com',
      category: 'web'
    },
    {
      title: 'Task Manager App',
      description: 'Manage tasks effectively with Angular + LocalStorage',
      image: '  assets/Task Manager App.jfif',
      link: 'https://example.com',
      category: 'app'
    },

    {
      title: 'Portfolio Template',
      description: 'Modern portfolio design built using Angular',
      image: 'assets/student management.jfif',
      link: 'https://example.com',
      category: 'web'
    }
  ];

  filteredProjects: Project[] = [];

  ngOnInit(): void {
    this.filteredProjects = this.projects;
    AOS.init({ duration: 1000, once: true });
  }

  filterProjects(category: string) {
    this.filteredProjects =
      category === 'all'
        ? this.projects
        : this.projects.filter(p => p.category === category);
  }
    activeFilter: string = 'all';
}
