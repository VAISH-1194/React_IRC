package com.example.Review2.service;

import java.util.List;
import java.util.Optional;

import com.example.Review2.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.Review2.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void saveUser(User user) {
        Optional<User> userExists = userRepository.findByEmail(user.getEmail());
        if (userExists.isPresent())
            return;
        userRepository.save(user);
    }

    public User getUserByEmail(String email) {
        boolean userExists = userRepository.existsByEmail(email);
        if (userExists) {
            return userRepository.findByEmail(email).get();
        }
        return new User();
    }

    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    public User updateUser(String email, User updatedUser) {
        Optional<User> userExists = userRepository.findByEmail(email);
        if (userExists.isPresent()) {
            User existingUser = userExists.get();
            existingUser.setName(updatedUser.getName());
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setPassword(updatedUser.getPassword());
            return userRepository.save(existingUser);
        }
        return null;
    }

    public String deleteUser(String email) {
        boolean userExists = userRepository.existsByEmail(email);
        if (userExists) {
            userRepository.deleteByEmail(email);
            return "User deleted successfully!";
        }
        return "Record not found with email id " + email;
    }

    public User updateUserBy(String email, User user) {
        Optional<User> userExists = userRepository.findByEmail(email);
        return userExists.map(existingUser -> {
            Optional.ofNullable(user.getName()).ifPresent(existingUser::setName);
            Optional.ofNullable(user.getEmail()).ifPresent(existingUser::setEmail); // Update email if provided
            Optional.ofNullable(user.getPassword()).ifPresent(existingUser::setPassword);
            return userRepository.save(existingUser);
        }).orElse(new User());
    }

}


