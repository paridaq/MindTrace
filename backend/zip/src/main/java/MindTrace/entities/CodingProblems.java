package MindTrace.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CodingProblems {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String question_name;
    private String question_link;
    private String Platform;
    private String Difficulty;
    private String solution_approach;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name= "user_id",nullable = false)
    private User user;

}
//@ManyToOne(fetch= FetchType.LAZY)
//@JoinColumn(name = "user_id",nullable= false)
//private User user;