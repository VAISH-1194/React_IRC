//package com.example.Review2.controller;
//
//import com.example.Review2.model.Book;
//import com.example.Review2.model.Review;
//import com.example.Review2.service.ReviewService;
//import com.example.Review2.service.BookService; // Import the BookService
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/reviews")
//public class ReviewController {
//
//    private final ReviewService reviewService;
//    private final BookService bookService; // Declare BookService
//
//    @Autowired
//    public ReviewController(ReviewService reviewService, BookService bookService) {
//        this.reviewService = reviewService;
//        this.bookService = bookService; // Inject BookService
//    }
//
//    @PostMapping("/add")
//    public ResponseEntity<Review> addReview(@RequestParam Long bookId,
//                                            @RequestParam String reviewerName,
//                                            @RequestParam String comment) {
//        // Retrieve book by ID
//        Book book = bookService.findById(bookId);
//        if (book == null) {
//            return ResponseEntity.notFound().build();
//        }
//
//        // Add review
//        Review review = reviewService.addReview(book, reviewerName, comment);
//        return ResponseEntity.status(HttpStatus.CREATED).body(review);
//    }
//}





package com.example.Review2.controller;

import com.example.Review2.model.Book;
import com.example.Review2.model.Review;
import com.example.Review2.service.ReviewService;
import com.example.Review2.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    private final ReviewService reviewService;
    private final BookService bookService;

    @Autowired
    public ReviewController(ReviewService reviewService, BookService bookService) {
        this.reviewService = reviewService;
        this.bookService = bookService;
    }

    @PostMapping("/add/{bookId}/{reviewerName}/{comment}")
    public ResponseEntity<Review> addReview(@PathVariable Long bookId,
                                            @PathVariable String reviewerName,
                                            @PathVariable String comment) {
        Book book = bookService.findById(bookId);
        if (book == null) {
            return ResponseEntity.notFound().build();
        }

        Review review = reviewService.addReview(book, reviewerName, comment);
        return ResponseEntity.status(HttpStatus.CREATED).body(review);
    }
}
