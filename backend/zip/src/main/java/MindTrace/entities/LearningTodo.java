package MindTrace.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import tools.jackson.databind.DatabindException;

import java.util.Date;

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
    private long user_id;
}
