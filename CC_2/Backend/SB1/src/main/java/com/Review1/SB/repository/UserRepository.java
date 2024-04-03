package com.Review1.SB.repository;

import java.util.Optional;

import com.Review1.SB.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {

    // Optional<User> existsByEmail(String email);
    boolean existsByEmail(String email);

    Optional<User> findByEmail(String email);

    void deleteByEmail(String email);

}