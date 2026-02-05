package MindTrace.services;


import MindTrace.dtos.BookDto;
import MindTrace.entities.Books;
import MindTrace.entities.User;
import MindTrace.repository.BookRepository;
import MindTrace.repository.UserRepository;
import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.print.Book;
import java.io.File;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;
    @Autowired
    private UserRepository userRepository;

    public Books saveBook(BookDto dto,Long user_id){
        Books book = new Books();
//        User user =userRepository.findById(user_id).orElseThrow();

//        book.setUser(user);
        book.setBook_name(dto.getBook_name());
        book.setStatus(true);
        return book;

    }
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
//}
