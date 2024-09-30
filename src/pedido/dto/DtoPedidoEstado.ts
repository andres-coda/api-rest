import { Type } from "class-transformer";
import { IsNotEmpty, ValidateNested } from "class-validator";
import { EstadoPedido } from "src/estado-pedido/entidad/estadoPedido.entity";
import { LibroPedido } from "src/libro-pedido/entidad/libroPedido.entity";

export class DtoPedidoEstado {
    @IsNotEmpty()
    estado: EstadoPedido;

    @IsNotEmpty()
    @ValidateNested({each:true})
    @Type(()=>LibroPedido)
    librosPedidos: LibroPedido[];
}