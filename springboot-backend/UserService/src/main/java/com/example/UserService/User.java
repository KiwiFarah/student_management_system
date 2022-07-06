package com.example.UserService;
import java.util.Date;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString

@Document(collection = "User")
public class User {
    
    @Id
    private String id;
    private int ref_id;
    private String firstName;
    private String lastName;
    private String email;
    private String dateOfBirth;
    private String mobile;
    private String status;
    private String password;
    private String accountType;
    
}


