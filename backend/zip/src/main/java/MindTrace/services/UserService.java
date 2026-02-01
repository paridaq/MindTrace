package MindTrace.services;


import MindTrace.dtos.CreateUserDto;
import MindTrace.entities.User;
import MindTrace.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;


    public User createUser(CreateUserDto dto){
        User user = new User();
        user.setUsername(dto.getUsername());
        user.setLeetocdeurl(dto.getLeetcodeurl());
        user.setRole(dto.getRole());
        user.setCodeforceurl(dto.getCodeforceurl());
        user.setCreated_at(new Date());
        return user;



    }


//    private String username;
//    private String role;
//    private String desgignation;
//    private String leetocdeurl;
//    private String codeforceurl;
//    private Date created_at;


}
