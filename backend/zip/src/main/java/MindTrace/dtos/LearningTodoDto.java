package MindTrace.dtos;


import lombok.Data;

@Data
public class LearningTodoDto {

    private String subject;
    private boolean priority;
    private String resources;
    private String anyLink;

}
