import { Component, Input } from '@angular/core';
import { ChatUsuarioComponent } from "../chat-usuario/chat-usuario.component";
import { FormsModule } from '@angular/forms';
import { Data } from '@angular/router';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [ChatUsuarioComponent,FormsModule],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
  @Input() chats: any[] = [];

  RecibirMensaje(event: string) {
    console.log(event);
    this.chats.push(event);
    console.log(this.chats);
    
  }

}
