import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalaComponent } from './sala/sala.component';
import { ChatUsuarioComponent } from './chat-usuario/chat-usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SalaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chat';
}
