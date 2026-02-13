package MindTrace.dtos;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
public class AddQuestionDto {
    private String question_name;
    private String question_link;
    private String platform;
    private String difficulty;
    private String solution_approach;

}

// @Id
// @GeneratedValue(strategy = GenerationType.AUTO)
// private long id;
// private String question_name;
// private String question_link;
// private String Platform;
// private String Difficulty;
// private String solution_approach;