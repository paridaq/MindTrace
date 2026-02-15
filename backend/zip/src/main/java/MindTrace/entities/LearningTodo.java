package MindTrace.entities;


import jakarta.persistence.*;
import lombok.Data;
import tools.jackson.databind.DatabindException;

import java.util.Date;
@Data
@Entity
public class LearningTodo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String subject;
    private Date created_at;
    private boolean priority;
    private String resources;
    private String anylink;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name= "user_id",nullable = false)
    private User user;
}
