package MindTrace.cotrollers;


import MindTrace.dtos.CreateUserDto;
import MindTrace.entities.User;
import MindTrace.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    @GetMapping()
    public String forpage(){
        return "whats app niga";
    }
}
