package com.example.demo;

import org.springframework.expression.ExpressionException;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("users")
public class UserResource {

    private final UserRepository repository;

    public UserResource(UserRepository repository){
        this.repository = repository;
    }

    @GetMapping("/all")
    public  List<User> users(){
        return repository.findAll();
    }

    @GetMapping("{id}")
    public User user(@PathVariable int id) throws Exception{

        User user;
        user = repository.findById(id).orElseThrow(() -> new Exception());

        return user;
    }


    @PostMapping("save")
    public User save(@RequestBody User user){
        User createdUser = repository.save(user);
        return createdUser;
    }

    @PatchMapping("update")
    public User updateUser(@RequestBody User updatedUser) throws Exception{
        User returnUser = repository.findById(updatedUser.getId())
                .map( user -> {
                user.setName(updatedUser.getName());
                user.setEmail(updatedUser.getEmail());
                return repository.save(user);
        }).orElseThrow(()->new Exception());

        return returnUser;
    }

    @DeleteMapping("{id}")
    public String delete(@PathVariable int id){
        repository.deleteById(id);
        return "Usuario com o id " + id + " deletado com sucesso";
    }

}
