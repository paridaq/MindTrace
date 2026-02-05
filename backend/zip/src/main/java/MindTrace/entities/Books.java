package MindTrace.entities;


import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.service.spi.InjectService;

import java.io.File;

@Entity
@Data
public class Books {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long book_id;

    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name = "user_id",nullable= false)
    private User user;
    private String book_name;


    private File book_file;
    private boolean status;
}
