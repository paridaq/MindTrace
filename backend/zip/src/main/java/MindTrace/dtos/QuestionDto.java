package MindTrace.dtos;


import lombok.Data;

@Data
public class QuestionDto {
    private Long id;
    private String question_name;
    private String question_link ;
    private String Difficulty;
    private String solution_approach;
}
