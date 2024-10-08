import { Transform, Type } from "class-transformer";
import { IsArray, IsNotEmpty, ValidateNested } from "class-validator";
import { Especificaciones } from "src/especificaciones/entidad/especificaciones.entity";
import { EstadoPedido } from "src/estado-pedido/entidad/estadoPedido.entity";
import { Libro } from "src/libro/entidad/libro.entity";

export class DtoLibroEstado {
    @IsNotEmpty()
    @Type(()=>Libro)
    libro: Libro;

    @IsNotEmpty()
    @Type(()=>EstadoPedido)
    estado:EstadoPedido;

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>Especificaciones)
    especificaciones: Especificaciones[];
}