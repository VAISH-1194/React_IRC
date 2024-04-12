package com.example.Review2.controller;

import com.example.Review2.model.Book;
import com.example.Review2.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/book")
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping("/save")
    public ResponseEntity<?> saveUser(@RequestBody Book book){
        try {
            bookService.saveBook(book);
            return new ResponseEntity<>("Book added successfully!", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Something went wrong!", HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<?> getAllBook() {
        try {
            return new ResponseEntity<>(bookService.getAllBooks(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Something went wrong", HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PutMapping("/update/{title}")
    public ResponseEntity<?> updateUser(@PathVariable String title, @RequestBody Book book) {
        try {
            Book updatedBook = bookService.updateBook(title, book);
            if (updatedBook != null) {
                return new ResponseEntity<>(updatedBook, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Book not found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Something went wrong", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get")
    public ResponseEntity<?> getBookByTitle(@RequestParam String title) {
        try {
            Optional<Book> book = bookService.getBookByTitle(title);
            if (book.isPresent()) {
                return new ResponseEntity<>(book.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Book not found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Something went wrong", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{title}")
    public ResponseEntity<?> deleteBook(@PathVariable String title) {
        try {
            return new ResponseEntity<>(bookService.deleteBook(title), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Something went wrong", HttpStatus.EXPECTATION_FAILED);
        }
    }

}
