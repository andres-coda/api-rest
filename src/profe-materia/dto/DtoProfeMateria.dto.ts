import { Type } from "class-transformer";
import { IsEmpty, IsNotEmpty } from "class-validator";
import { Curso } from "src/curso/entidad/curso.entity";
import { Materia } from "src/materia/entidad/materia.entity";
import { Persona } from "src/persona/entidad/persona.entity";

export class DtoProfeMateria {
    @IsEmpty()
    @Type(()=>Persona)
    profesor: Persona;

    @IsEmpty()
    @Type(()=>Materia)
    materia: Materia;

    @IsNotEmpty()
    @Type(()=>Curso)
    curso: Curso;
}