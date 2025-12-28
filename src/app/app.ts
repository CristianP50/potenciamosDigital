import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Header } from './components/header/header';
import { ContactButton } from './components/contact-button/contact-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Header, ContactButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('potenciamos-digitial');
}
