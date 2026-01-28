package MindTrace.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class contests {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String topic;
    private long score;
    private  long user_id;
}
