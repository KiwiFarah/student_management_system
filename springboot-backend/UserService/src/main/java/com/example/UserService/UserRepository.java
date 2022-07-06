package com.example.UserService;

import java.util.List;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface UserRepository extends MongoRepository<User, Integer>{

   // public Optional<User> findById(String id);
    
    
    Optional<User>  findUsersById(String id);
    public User findUserById(String id);
    
    @Query("{ 'ref_id' : ?0 }")
    public User findUsersByrRefId(int ref_id);   
    
    
            
     void deleteByIdIn(String ids);
    
    
   // 62c5774247142b42ee8a582c
}
