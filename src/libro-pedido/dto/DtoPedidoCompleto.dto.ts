import { Type } from "class-transformer";
import { IsNotEmpty, ValidateNested } from "class-validator";
import { Pedido } from "src/pedido/entidad/pedido.entity";
import { Persona } from "src/persona/entidad/persona.entity";
import { LibroPedido } from "../entidad/libroPedido.entity";

export class DtoPedidoCompleto{

    @IsNotEmpty()
    @ValidateNested({each:true})
    @Type(()=>LibroPedido)
    librosPedido:LibroPedido[];

    @IsNotEmpty()
    @Type(()=>Pedido)
    pedido:Pedido

    @IsNotEmpty()
    @Type(()=>Persona)
    cliente:Persona;
    
}