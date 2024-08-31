import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-chat-usuario',
  standalone: true,
  imports: [],
  templateUrl: './chat-usuario.component.html',
  styleUrl: './chat-usuario.component.css'
})
export class ChatUsuarioComponent {
  @Output() mensajeNuevo = new EventEmitter<string>();
  @Input() nombre: string = "";
  mensaje: string = "";
  
  onMensajeChange(event: any) {
    this.mensaje = event.target.value;
  }  

  enviarMensaje() {
    this.mensajeNuevo.emit(this.nombre +": "+ this.mensaje);
    this.mensaje = "";
  }
}
