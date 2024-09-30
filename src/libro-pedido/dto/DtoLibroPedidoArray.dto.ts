import { Type } from "class-transformer";
import { IsNotEmpty, ValidateNested } from "class-validator";
import { LibroPedido } from "../entidad/libroPedido.entity";

export class DtoLibroPedidoArray { 
    @IsNotEmpty()
    @ValidateNested({each:true})
    @Type(()=>LibroPedido)
    librosPedido:LibroPedido[];
}