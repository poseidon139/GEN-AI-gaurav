import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public tabs: any[] = [];
  constructor() {
    this.constructTabs();
  }

  constructTabs() {
    this.tabs = [
      { name: 'User View', url: '/userview', selected: true },
      { name: 'Topic View', url: '/topicview', selected: false }
    ];
  }

  isActiveTab(tab: any): boolean {
    return tab.selected;
  }
}
