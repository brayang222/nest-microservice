import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private users: UserDto[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doeeee' },
  ];
  findAll() {
    return this.users;
  }
}
