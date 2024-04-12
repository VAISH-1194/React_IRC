//package com.example.Review2.service;
//
//import com.example.Review2.model.Book;
//import com.example.Review2.model.Review;
//import com.example.Review2.repository.ReviewRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//@Service
//public class ReviewService {
//
//    private final ReviewRepository reviewRepository;
//
//    @Autowired
//    public ReviewService(ReviewRepository reviewRepository) {
//        this.reviewRepository = reviewRepository;
//    }
//
//    public Review addReview(Book book, String reviewerName, String comment) {
//        Review review = new Review();
//        review.setBook(book);
//        review.setReviewerName(reviewerName);
//        review.setComment(comment);
//        return reviewRepository.save(review);
//    }
//}








//package com.example.Review2.service;
//
//import com.example.Review2.model.Book;
//import com.example.Review2.model.Review;
//import com.example.Review2.repository.ReviewRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//@Service
//public class ReviewService {
//
//    private final ReviewRepository reviewRepository;
//
//    @Autowired
//    public ReviewService(ReviewRepository reviewRepository) {
//        this.reviewRepository = reviewRepository;
//    }
//
//    public Review addReview(Book book, String reviewerName, String comment) {
//        Review review = new Review();
//        review.setBook(book);
//        review.setReviewerName(reviewerName);
//        review.setComment(comment);
//        return reviewRepository.save(review);
//    }
//}









package com.example.Review2.service;

import com.example.Review2.model.Book;
import com.example.Review2.model.Review;
import com.example.Review2.repository.ReviewRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class ReviewService {

    private final ReviewRepository reviewRepository;

    @Autowired
    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public Review addReview(Book book, String reviewerName, String comment) {
        Review review = new Review();
        review.setBook(book);
        review.setReviewerName(reviewerName);
        review.setComment(comment);

        // Assuming the Book entity has a 'name' field
        review.setBookName(book.getName());
//        System.out.println(review);

        return reviewRepository.save(review);
    }

}

