import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'yassin-portfolio';
}

<nav class="navbar navbar-expand-lg bg-body-tertiary px-3 py-2" [ngClass]="{ 'dark-mode': isDarkMode }">
  <div class="container-fluid">
    <a class="navbar-brand" routerLink="/">Yassin</a>
    <div>
      <button (click)="toggleDarkMode()" class="btn btn-outline-secondary btn-sm me-2">
        {{ isDarkMode ? '🌙' : '☀️' }}
      </button>
      <button (click)="switchLang()" class="btn btn-outline-secondary btn-sm">
        {{ lang === 'nl' ? 'EN' : 'NL' }}
      </button>
    </div>
  </div>
</nav>

