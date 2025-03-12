package com.example.randomuser.controller;

import com.example.randomuser.model.Root;
import com.example.randomuser.service.RandomUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class RandomUserController {

    private final RandomUserService randomUserService;

    @Autowired
    public RandomUserController(RandomUserService randomUserService) {
        this.randomUserService = randomUserService;
    }

    @GetMapping("/randomuser")
    public Root getRandomUser() {
        return randomUserService.getRandomUser();
    }
}
