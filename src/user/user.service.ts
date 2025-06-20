import { Injectable } from '@nestjs/common';
import { userDto } from './dto/create.user.dto';

@Injectable()
export class UserService {
    private users: Array<userDto> = [];
    private cont = 0;

    createUser(user: userDto): string {
        const newUser = {
            id: this.cont++,
            ...user,
        };
        this.users.push(newUser);
        return 'kia created';
    }

    userAll(): Array<userDto> {
        return this.users;
    }

    userById(id: number): string {
        return `kia by id ${id}`;
    }

    deleteUserById(id: number): string {
        return `delete kia by id ${id}`;
    }
}