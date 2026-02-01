package MindTrace.dtos;


import lombok.Data;

import java.util.Date;

@Data
public class CreateUserDto {

    private String username;
    private String role;
    private String designation;
    private String leetcodeurl;
    private String codeforceurl;


}



//private String username;
//private String role;
//private String desgignation;
//private String leetocdeurl;
//private String codeforceurl;
//private Date created_at;
