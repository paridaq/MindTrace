package MindTrace.dtos;

import lombok.Data;

@Data
public class PeopleDto {
    private Long id;
    private String name;
    private String email;
    private String company;
    private String designation;
    private String linkedin_url;
}
