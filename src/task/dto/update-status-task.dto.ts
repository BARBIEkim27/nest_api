import { IsEnum } from "class-validator";
import { TaskStatus } from "src/status/status-task";

export class UdateStatusTaskDto{
    @IsEnum(TaskStatus,{
        message:'status invalidate'
    })
    status:TaskStatus;
}