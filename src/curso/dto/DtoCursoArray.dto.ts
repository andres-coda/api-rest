import { ArrayNotEmpty, IsArray, IsNotEmpty, ValidateNested } from "class-validator";
import { Curso } from "../entidad/curso.entity";
import { Type } from "class-transformer";

export class DtoCursoArray{
    @IsNotEmpty()
    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(()=>Curso)
    cursos:Curso[]
}