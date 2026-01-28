package MindTrace.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Expretise {
     @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  long id;
     private String subject;
     private long score;
     private long user_id;
     private  String description;
     private long project_id;
}
