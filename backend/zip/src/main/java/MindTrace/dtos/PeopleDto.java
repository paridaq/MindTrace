package MindTrace.dtos;

import lombok.Data;

import java.util.Date;

@Data
public class PeopleDto {
    private Long id;
    private String name;
    private String email;
    private String company;
    private String designation;
    private String linkedin_url;
    private Date created_at;
}
