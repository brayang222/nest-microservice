import { BookDto } from '@app/contracts/books/dto/book.dto';
import { CreateBookDto } from '@app/contracts/books/dto/create-book.dto';
import { UpdateBookDto } from '@app/contracts/books/dto/update-book.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  private books: BookDto[] = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      rating: 5,
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      rating: 3,
    },
  ];
  create(createBookDto: CreateBookDto) {
    const newBook: BookDto = {
      ...createBookDto,
      id: this.books.length + 1,
    };
    this.books.push(newBook);
    return newBook;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return this.books.find((book) => book.id === id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
