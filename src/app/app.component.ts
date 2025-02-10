import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Angular Standalone Component
  imports: [RouterOutlet, HttpClientModule], // ✅ Ajout de HttpClientModule ici
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCollectors();
  }

  title = 'RecycleHub';

  loadCollectors() {
    if (!localStorage.getItem('users')) {
      this.http.get('/assets/data/collectors.json').subscribe((data) => {
        localStorage.setItem('users', JSON.stringify(data));
        console.log('Collectors data loaded into localStorage');
      });
    }
  }

}
