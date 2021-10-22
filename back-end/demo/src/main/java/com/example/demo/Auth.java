package com.example.demo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.util.MimeType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpHeaders;

import java.util.Collections;

@RestController
@RequestMapping("auth")
public class Auth {
    @Value("${SPOTIFY_CLIENT_ID}")
    private String SPOTIFY_CLIENT_ID;

    @Value("${SPOTIFY_CLIENT_SECRET}")
    private String SPOTIFY_CLIENT_SECRET;

    @Value("${REDIRECT_URL}")
    private String REDIRECT_URL;

    private String authOptions = "https://accounts.spotify.com/authorize?"
            + "client_id="+SPOTIFY_CLIENT_ID+"&"
            + "response_type=code&"
            + "redirect_uri="+REDIRECT_URL;

    RestTemplate restTemplate = new RestTemplate();
    HttpHeaders headers = new HttpHeaders();
    headers.setAccept(Collections.singletonList(MimeType.SpecificityComparator));

    HttpEntity<String> entity = new HttpEntity<>("body", headers);

    restTemplate.exchange(url, HttpMethod.POST, entity, String.class);
}
