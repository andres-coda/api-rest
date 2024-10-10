import {
    WebSocketGateway,
    WebSocketServer,
  } from '@nestjs/websockets';
  import { Server } from 'socket.io';
import { Pedido } from '../entidad/pedido.entity';

  
  @WebSocketGateway({ cors: true }) // Habilita CORS para permitir conexiones desde el frontend
  export class PedidoGateway {
    @WebSocketServer()
    server: Server;
    
    onModuleInit() {
      this.server.setMaxListeners(20); // Aumentar el límite a 20 listeners, o el número que consideres adecuado.
      console.log(this.server.listenerCount('Se actualizo pedido'));
    }
    // Método para emitir la actualización del curso a todos los clientes conectados
    enviarActualizacionPedido(pedido : Pedido) {
      this.server.emit('Se actualizo pedido', pedido); // Emite el evento 'cursoActualizado' a todos los clientes
    }

    enviarCrearPedido(pedido : Pedido) {
      this.server.emit('Se creo pedido', pedido); // Emite el evento 'cursoActualizado' a todos los clientes
    }

    enviarEliminoPedido(id : number) {
      this.server.emit('Se elimino pedido', id); // Emite el evento 'cursoActualizado' a todos los clientes

    }
  }
  