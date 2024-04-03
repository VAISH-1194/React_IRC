//package com.OnlineBookStore.SB.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PatchMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//
//import com.OnlineBookStore.SB.model.User;
//import com.OnlineBookStore.SB.service.UserService;
//
//@RestController
//@RequestMapping("/api/v1/user")
//public class UserController {
//
//    @Autowired
//    private UserService userService;
//
//    @PostMapping("/save")
//    public ResponseEntity<?> saveUser(@RequestBody User user) {
//        try {
//            userService.saveUser(user);
//            return new ResponseEntity<>("User registered successfully!", HttpStatus.CREATED);
//        } catch (Exception e) {
//            return new ResponseEntity<>("Something went wrong!", HttpStatus.EXPECTATION_FAILED);
//        }
//    }
//
//    @GetMapping("/get")
//    public ResponseEntity<?> getUserByEmail(@RequestParam String email) {
//        try {
//            return new ResponseEntity<>(userService.getUserByEmail(email), HttpStatus.OK);
//        } catch (Exception e) {
//            return new ResponseEntity<>("Something went wrong", HttpStatus.EXPECTATION_FAILED);
//        }
//    }
//
//    @GetMapping("/getAll")
//    public ResponseEntity<?> getAllUser() {
//        try {
//            return new ResponseEntity<>(userService.getAllUser(), HttpStatus.OK);
//        } catch (Exception e) {
//            return new ResponseEntity<>("Something went wrong", HttpStatus.EXPECTATION_FAILED);
//        }
//    }
//
//    @PutMapping("/update/{email}")
//    public ResponseEntity<?> updateUser(@PathVariable String email, @RequestBody User user) {
//        try {
//            return new ResponseEntity<>(userService.updateUser(email, user), HttpStatus.OK);
//        } catch (Exception e) {
//            return new ResponseEntity<>("Something went wrong", HttpStatus.EXPECTATION_FAILED);
//        }
//    }
//
//    @DeleteMapping("/delete/{email}")
//    public ResponseEntity<?> deleteUser(@PathVariable String email) {
//        try {
//            return new ResponseEntity<>(userService.deleteUser(email), HttpStatus.OK);
//        } catch (Exception e) {
//            return new ResponseEntity<>("Something went wrong", HttpStatus.EXPECTATION_FAILED);
//        }
//    }
//
//    @PatchMapping("/patchUpdate/{email}")
//    public ResponseEntity<?> updateUserBy(@PathVariable String email, @RequestBody User user) {
//        try {
//            return new ResponseEntity<>(userService.updateUserBy(email, user), HttpStatus.OK);
//        } catch (Exception e) {
//            return new ResponseEntity<>("Something went wrong", HttpStatus.EXPECTATION_FAILED);
//        }
//    }
//}


package com.Review1.SB.controller;

import com.Review1.SB.model.User;
import com.Review1.SB.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/save")
    public ResponseEntity<?> saveUser(@RequestBody User user) {
        try {
            userService.saveUser(user);
            return new ResponseEntity<>("User registered successfully!", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Something went wrong!", HttpStatus.EXPECTATION_FAILED);
        }
    }

//    @GetMapping("/get")
//    public ResponseEntity<?> getUserByEmail(@RequestParam String email) {
//        try {
//            return new ResponseEntity<>(userService.getUserByEmail(email), HttpStatus.OK);
//        } catch (Exception e) {
//            return new ResponseEntity<>("Something went wrong", HttpStatus.EXPECTATION_FAILED);
//        }
//    }

    @GetMapping("/getAll")
    public ResponseEntity<?> getAllUser() {
        try {
            return new ResponseEntity<>(userService.getAllUser(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Something went wrong", HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PutMapping("/update/{email}")
    public ResponseEntity<?> updateUser(@PathVariable String email, @RequestBody User user) {
        try {
            User updatedUser = userService.updateUser(email, user);
            if (updatedUser != null) {
                return new ResponseEntity<>(updatedUser, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Something went wrong", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



    @DeleteMapping("/delete/{email}")
    public ResponseEntity<?> deleteUser(@PathVariable String email) {
        try {
            return new ResponseEntity<>(userService.deleteUser(email), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Something went wrong", HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PatchMapping("/patchUpdate/{email}")
    public ResponseEntity<?> updateUserBy(@PathVariable String email, @RequestBody User user) {
        try {
            return new ResponseEntity<>(userService.updateUserBy(email, user), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Something went wrong", HttpStatus.EXPECTATION_FAILED);
        }
    }
}
