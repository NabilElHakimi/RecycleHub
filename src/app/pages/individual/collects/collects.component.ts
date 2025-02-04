import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collects',
  templateUrl: './collects.component.html',
  styleUrls: ['./collects.component.css'] ,
  imports: [CommonModule]
})
export class CollectsComponent implements OnInit {
  collects: any[] = [];

  ngOnInit() {
    this.loadCollects();
  }

  loadCollects() {
    const collectsData = localStorage.getItem('collecteData');

    if (collectsData) {
      this.collects = JSON.parse(collectsData);

      this.collects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
  }
}
