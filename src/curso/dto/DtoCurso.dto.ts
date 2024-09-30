import { Type } from "class-transformer";
import { IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Escuela } from "src/escuela/entidad/escuela.entity";
export class DtoCurso {
    @IsEmpty()
    @IsNumber()
    idCurso?:number;

    @IsNotEmpty()
    @IsNumber()
    anio: number;

    @IsNotEmpty()
    @IsString()
    grado: string;

    @IsNotEmpty()
    @Type(() => Escuela)
    escuela: Escuela;   
}