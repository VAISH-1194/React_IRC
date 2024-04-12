package com.example.Review2.repository;


import java.util.Optional;

import java.util.Optional;

import com.example.Review2.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {

    // Optional<User> existsByEmail(String email);
    boolean existsByEmail(String email);

    Optional<User> findByEmail(String email);

    void deleteByEmail(String email);

}