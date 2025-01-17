import { CreateBookDto } from '@app/contracts/books/dto/create-book.dto';
import { UpdateBookDto } from '@app/contracts/books/dto/update-book.dto';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class BooksService {
  constructor(@Inject('BOOK_SERVICE') private booksClient: ClientProxy) {}
  create(createBookDto: CreateBookDto) {
    return this.booksClient.send('books.create', createBookDto);
  }

  findAll() {
    return this.booksClient.send('books.findAll', {});
  }

  findOne(id: number) {
    return this.booksClient.send('books.findOne', id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.booksClient.send('books.update', { id, ...updateBookDto });
  }

  remove(id: number) {
    return this.booksClient.send('books.remove', id);
  }
}
