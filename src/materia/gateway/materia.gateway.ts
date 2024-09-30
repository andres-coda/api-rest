import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
  } from '@nestjs/websockets';
  import { Server } from 'socket.io';
import { Materia } from '../entidad/materia.entity';

  
  @WebSocketGateway({ cors: true }) // Habilita CORS para permitir conexiones desde el frontend
  export class MateriaGateway {
    @WebSocketServer()
    server: Server;

    onModuleInit() {
      this.server.setMaxListeners(20); // Aumentar el límite a 20 listeners, o el número que consideres adecuado.
    }
  
    // Método para emitir la actualización del curso a todos los clientes conectados
    enviarActualizacionMateria(data: Materia) {
      this.server.emit('Se actualizo materia', data); // Emite el evento 'cursoActualizado' a todos los clientes
    }

    enviarCrearMateria(data:Materia){
      this.server.emit('Se creo materia', data);
    }
  }
  