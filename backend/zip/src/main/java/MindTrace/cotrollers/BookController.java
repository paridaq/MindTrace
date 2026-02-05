package MindTrace.cotrollers;


import MindTrace.dtos.BookDto;
import MindTrace.entities.Books;
import MindTrace.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/book")
public class BookController {

    @Autowired
    private BookService bookService;
    @PostMapping("/{user_id}/addBook")
    public ResponseEntity<Books> saveBookDetails(@RequestBody BookDto dto, @PathVariable Long user_id){

        Books savedBook = bookService.saveBook(dto,user_id);
        return ResponseEntity.ok(savedBook);

    }

}
