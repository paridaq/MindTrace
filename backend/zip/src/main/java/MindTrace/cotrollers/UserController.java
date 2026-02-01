package MindTrace.cotrollers;


import MindTrace.dtos.CreateUserDto;
import MindTrace.entities.User;
import MindTrace.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")

public class UserController {

    @Autowired
    private UserService userService;


    @PostMapping()
    public ResponseEntity<User> createUser(@RequestBody CreateUserDto dto){
        User savedUser = userService.createUser(dto);
        return ResponseEntity.ok(savedUser);
    }
}
