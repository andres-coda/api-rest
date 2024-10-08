import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
  } from '@nestjs/websockets';
  import { Server } from 'socket.io';
import { Libro } from '../entidad/libro.entity';

  
  @WebSocketGateway({ cors: true }) // Habilita CORS para permitir conexiones desde el frontend
  export class LibroGateway {
    @WebSocketServer()
    server: Server;

     onModuleInit() {
    this.server.setMaxListeners(20); // Aumentar el límite a 20 listeners, o el número que consideres adecuado.
  }
  
    // Método para emitir la actualización del curso a todos los clientes conectados
    enviarActualizacionLibro( data: Libro) {
      this.server.emit('Se actualizo libro', data); // Emite el evento 'cursoActualizado' a todos los clientes
    }

    enviarCrearLibro( data: Libro) {
      this.server.emit('Se creo libro', data); // Emite el evento 'cursoActualizado' a todos los clientes
    }

    enviarEliminarLibro( id: number) {
      this.server.emit('Se elimino libro', id); // Emite el evento 'cursoActualizado' a todos los clientes
    }
  }
  