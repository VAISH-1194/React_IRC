package com.example.Review2.service;

import com.example.Review2.model.Book;
import com.example.Review2.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Optional<Book> getBookById(Long id) {
        return bookRepository.findById(id);
    }

    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }

    public Book updateBook(String title, Book updatedBook) {
        Optional<Book> optionalBook = bookRepository.findByTitle(title); // Assuming findByTitle method is available in your repository
        if (optionalBook.isPresent()) {
            Book existingBook = optionalBook.get();
            existingBook.setTitle(updatedBook.getTitle());
            existingBook.setAuthor(updatedBook.getAuthor());
            return bookRepository.save(existingBook);
        }
        return null;
    }


    public String deleteBook(String title) {
        if (bookRepository.existsByTitle(title)) {
            bookRepository.deleteByTitle(title);
            return "Book deleted successfully!";
        }
        return "Book not found with this title " + title;
    }

    public Optional<Book> getBookByTitle(String title) {
        return bookRepository.findByTitle(title);
    }

    public Book findById(Long bookId) {
        Optional<Book> optionalBook = bookRepository.findById(bookId);
        return optionalBook.orElse(null);
    }
}
