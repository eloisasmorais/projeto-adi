package com.example.demo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.json.JSONObject;
import java.util.Base64;

import java.util.Collections;

@RestController
@RequestMapping("auth")
public class Auth {
    @Value("${REACT_APP_SPOTIFY_CLIENT_ID}")
    private String REACT_APP_SPOTIFY_CLIENT_ID;

    @Value("${REACT_APP_SPOTIFY_CLIENT_SECRET}")
    private String REACT_APP_SPOTIFY_CLIENT_SECRET;

    @Value("${REACT_APP_REDIRECT_URL}")
    private String REACT_APP_REDIRECT_URL;

    @PostMapping("/getResults")
    public JSONObject getResults(@RequestBody String code){

        String str = REACT_APP_SPOTIFY_CLIENT_ID + ":" + REACT_APP_SPOTIFY_CLIENT_SECRET;
        String encoded = Base64.getUrlEncoder().encodeToString(str.getBytes()); //encodando para ficar igual ao do exemplo

        //System.out.println("OK");

        String requestURL = "https://accounts.spotify.com/api/token?"
                    + "client_id="+REACT_APP_SPOTIFY_CLIENT_ID+"&"
                    + "response_type=code&"
                    + "redirect_uri="+REACT_APP_REDIRECT_URL;

        RestTemplate restTemplate = new RestTemplate();  //criando RestTemplate que é como um axios para nós

        HttpHeaders headers = new HttpHeaders();  //criando um header p enviar junto da request
//        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
//        headers.add("Content-Type", headers.APPLICATION_FORM_URLENCODED);
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        headers.add("Authorization", "Basic "+ encoded);
        MultiValueMap<String,String> form = new LinkedMultiValueMap<>();
        form.add("response_type", "token");
        form.add("grant_type", "authorization_code");
        form.add("client_id", REACT_APP_SPOTIFY_CLIENT_ID);
        form.add("client_secret", REACT_APP_SPOTIFY_CLIENT_SECRET);
        form.add("redirect_uri", REACT_APP_REDIRECT_URL);
        form.add("code", code);

//        HttpEntity<String, String> entity = new HttpEntity<>(form, headers);  //adicionando os headers em uma entidade

//        ResponseEntity<JSONObject> response = restTemplate.exchange(requestURL, HttpMethod.POST, entity, JSONObject.class);

        ResponseEntity<JSONObject> token = restTemplate.exchange(requestURL,
                HttpMethod.POST, new HttpEntity<>(form, headers), JSONObject.class);

        return token.getBody();

//        return restTemplate.exchange("https://accounts.spotify.com/api/token", HttpMethod.POST, entity, String.class);
    }

    @GetMapping("/get")
    private String Get(){

        return "ok";
    }
}

    //criando RestTemplate que é como um axios para nós
//    RestTemplate restTemplate = new RestTemplate();
    //criando um header p enviar junto da request
//    HttpHeaders headers = new HttpHeaders();
//        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
//                headers.add("Authorization", "Basic " + code);
//
//                HttpEntity<String> entity = new HttpEntity<>(headers);
//
//        ResponseEntity<String> response = restTemplate.exchange(requestURL, HttpMethod.GET, entity, String.class);
//
//        return "Hello";
//header que vai ser usado no get
//headers.add("Authorization", "Bearer " + code);
