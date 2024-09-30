import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Persona } from "src/persona/entidad/persona.entity";

export class DtoPedido{
    @IsNotEmpty()
    @IsDate()
    fechaEntrega: Date;

    @IsNotEmpty()
    @IsNumber()
    importeTotal: number;

    @IsNotEmpty()
    @IsNumber()
    sena: number;

    @IsNotEmpty()
    @IsNumber()
    anillados: number;

    @IsNotEmpty()
    @IsNumber()
    archivos: number;

    @IsNotEmpty()
    @Type(() => Persona)
    @IsString()
    cliente:Persona;
}