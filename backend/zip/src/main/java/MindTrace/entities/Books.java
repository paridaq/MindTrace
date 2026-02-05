package MindTrace.entities;


import jakarta.persistence.*;

import java.io.File;

@Entity
public class Books {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id ;
    private long user_id;
    private String book_name;

//    @ManyToOne(fetch= FetchType.LAZY)
//    @JoinColumn(name = "user_id",nullable= false)
    private File book_file;
    private boolean status;
}
