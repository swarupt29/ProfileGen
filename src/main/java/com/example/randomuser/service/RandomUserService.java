package com.example.randomuser.service;

import com.example.randomuser.model.Root;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class RandomUserService {
    private static final String API_URL = "https://randomuser.me/api/";

    public Root getRandomUser() {
        RestTemplate restTemplate = new RestTemplate();
        Root root = restTemplate.getForObject(API_URL, Root.class);
        return root;
    }
}
