import { ArrayNotEmpty, IsArray, IsNotEmpty, ValidateNested } from "class-validator";
import { Persona } from "../entidad/persona.entity";
import { Type } from "class-transformer";

export class DtoArrayPersona{
    @IsNotEmpty()
    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(()=>Persona)
    profesores:Persona[]
}