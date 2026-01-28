package MindTrace.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private long user_id;
    private long contest_id;
    private String feedback;
}
