import { IsOptional, IsString, Length } from "class-validator";

export class UdateTaskDto{
    @IsOptional()
    @IsString()
    @Length(3, 20)
    title?: string;
    @IsOptional()
    @IsString()
    description?: string
}