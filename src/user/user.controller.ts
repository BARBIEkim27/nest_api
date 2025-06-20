import { UserService } from './user.service';
import { Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import { userDto } from './dto/create.user.dto';

@Controller('Users')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Post()
    pushNewUser(@Body() user: userDto):string{
        return this.userService.createUser(user);
    }
    @Get()
    getUser():Array<userDto> {
        return this.userService.userAll(); ;
    }

    @Get('/:id')
    getUserById(@Param('id') id: number): string {
        return this.userService.userById(id);
    }

    @Delete('/:id')
    deleteUserById(@Param('id') id: number): string {
        return this.userService.deleteUserById(id);
    }

}