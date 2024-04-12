//package com.example.Review2.model;
//
//import jakarta.persistence.*;
//
//@Entity
//@Table(name = "reviews")
//public class Review {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @ManyToOne
//    @JoinColumn(name = "book_id", nullable = false)
//    private Book book;
//
//    @Column(name = "reviewer_name", nullable = false)
//    private String reviewerName;
//
//    @Column(nullable = false)
//    private String comment;
//
//    // Constructors
//
//    public Review() {
//
//    }
//
//    public Review(Book book, String reviewerName, String comment) {
//        this.book = book;
//        this.reviewerName = reviewerName;
//        this.comment = comment;
//    }
//
//    // Getters and Setters
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public Book getBook() {
//        return book;
//    }
//
//    public void setBook(Book book) {
//        this.book = book;
//    }
//
//    public String getReviewerName() {
//        return reviewerName;
//    }
//
//    public void setReviewerName(String reviewerName) {
//        this.reviewerName = reviewerName;
//    }
//
//    public String getComment() {
//        return comment;
//    }
//
//    public void setComment(String comment) {
//        this.comment = comment;
//    }
//}






package com.example.Review2.model;

import jakarta.persistence.*;

@Entity
@Table(name = "reviews")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Book book;

    @Column(name = "reviewer_name")
    private String reviewerName;

    @Column(nullable = false)
    private String comment;

    public Review() {}

    public Review(Book book, String reviewerName, String comment) {
        this.book = book;
        this.reviewerName = reviewerName;
        this.comment = comment;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public String getReviewerName() {
        return reviewerName;
    }

    public void setReviewerName(String reviewerName) {
        this.reviewerName = reviewerName;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public void setBookName(String name) {

    }
}
