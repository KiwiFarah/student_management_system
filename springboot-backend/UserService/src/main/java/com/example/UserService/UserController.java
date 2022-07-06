package com.example.UserService;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class UserController {
    
    @Autowired
    private UserRepository repository;
    
    @PostMapping("/api/addUser")
    public String saveUser(@RequestBody User user){
        repository.save(user);
        return "Added user with id : " + user.getId();
    }
    
    @GetMapping("/api/findAllUsers")
    public List<User> getUsers(){
        return repository.findAll();
    }
    
    @GetMapping("/api/findAllUsers/{id}")
    public User getUser(@PathVariable String id){
        return repository.findUserById(id);       
    }
    
     @GetMapping("/api/findAllUsersyrRefId/{id}")
    public User getUseryrRefId(@PathVariable int id){
        return repository.findUsersByrRefId(id);       
    }
      
    @PutMapping("/api/userUpdate/{id}")
    public ResponseEntity<User> updateTutorial(@PathVariable("id") String id, @RequestBody User user) {
      Optional<User> tutorialData = repository.findUsersById(id);
      if (tutorialData.isPresent()) {
        User _tutorial = tutorialData.get();
        _tutorial.setFirstName(user.getFirstName());
        _tutorial.setLastName(user.getLastName());
        _tutorial.setEmail(user.getEmail());
        _tutorial.setDateOfBirth(user.getDateOfBirth());
        _tutorial.setMobile(user.getMobile());
        _tutorial.setStatus(user.getStatus());
        _tutorial.setPassword(user.getPassword());
        _tutorial.setAccountType(user.getAccountType());    
        return new ResponseEntity<>(repository.save(_tutorial), HttpStatus.OK);
      } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
      }
    }

    @DeleteMapping("/api/deleteUser/{id}")
	public String deleteUser(@PathVariable String id) {
		repository.deleteByIdIn(id);
		return "User deleted with id : " + id;
	} 
}
