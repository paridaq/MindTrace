package MindTrace.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Date;

@Entity
public class Interview {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String InterviewTopic;
    private long score;
    private Date attended_at;
    private  long user_id;

}
