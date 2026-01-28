package MindTrace.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CodingProblems {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String question_name;
    private String question_link;
    private String Platform;
    private String Difficulty;
    private String solution_approach;
}
