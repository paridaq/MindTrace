package MindTrace.dtos;

import MindTrace.entities.User;
import jakarta.persistence.*;
import lombok.Data;

import java.io.File;

@Data
public class BookDto {
    private String book_name;
    private File book_file;


}


//@Id
//@GeneratedValue(strategy = GenerationType.AUTO)
//private long id ;
//@ManyToOne(fetch= FetchType.LAZY)
//@JoinColumn(name = "user_id",nullable= false)
//private User user;
//private String book_name;
//
//
//private File book_file;
//private boolean status;