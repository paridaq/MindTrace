package MindTrace.dtos;

import MindTrace.entities.User;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;


@Data
public class AddPeopleDto {

    private String name;
    private String email;
    private String company;
    private String designation;
    private String linkedin_url;
    private Date created_at;
}




