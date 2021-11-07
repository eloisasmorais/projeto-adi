package com.example.demo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Base64;
import java.util.Collections;
import java.util.HashMap;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("auth")
public class Auth {
    @Value("${REACT_APP_SPOTIFY_CLIENT_ID}")
    private String REACT_APP_SPOTIFY_CLIENT_ID;

    @Value("${REACT_APP_SPOTIFY_CLIENT_SECRET}")
    private String REACT_APP_SPOTIFY_CLIENT_SECRET;

    @Value("${REACT_APP_REDIRECT_URL}")
    private String REACT_APP_REDIRECT_URL;


    @PostMapping(value="/getResults", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public String getResults(@RequestBody HashMap<String, String> payload){
        String code = payload.get("code");
        String requestURL = "https://accounts.spotify.com/api/token";


        RestTemplate restTemplate = new RestTemplate();  //criando RestTemplate que é como um axios para nós
        HttpHeaders headers = new HttpHeaders();  //criando um header p enviar junto da request

        String str = REACT_APP_SPOTIFY_CLIENT_ID + ":" + REACT_APP_SPOTIFY_CLIENT_SECRET;
        String encoded = Base64.getUrlEncoder().encodeToString(str.getBytes()); //encodando para ficar igual ao do exemplo

        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        headers.add("Authorization", "Basic "+ encoded);

        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(requestURL)
                .queryParam("grant_type", "authorization_code")
                .queryParam("code", code)
                .queryParam("scope", "user-top-read")
        .queryParam("redirect_uri", "http://localhost:3000");

        HttpEntity<?> entity = new HttpEntity<>(headers);

        HttpEntity<String> response = restTemplate.exchange(
                builder.toUriString(),
                HttpMethod.POST,
                entity,
                String.class);
        return response.getBody();
    }

    @PostMapping(value="/getTopItems", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public String getTopItems(@RequestBody HashMap<String, String> payload){
        String token = payload.get("token");
        String requestURL = "https://api.spotify.com/v1/me/top/artists";

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();

        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers.add("Authorization", "Bearer " + token);

        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(requestURL)
                .queryParam("limit", 10);

        HttpEntity<?> entity = new HttpEntity<>(headers);

        HttpEntity<String> response = restTemplate.exchange(
                builder.toUriString(),
                HttpMethod.GET,
                entity,
                String.class);

        return response.getBody();
    }
}
