package com.example.Review2.repository;

import com.example.Review2.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BookRepository extends JpaRepository<Book, Long> {
    Optional<Book> findByTitle(String title);
    void deleteByTitle(String title);

    boolean existsByTitle(String title);
}
