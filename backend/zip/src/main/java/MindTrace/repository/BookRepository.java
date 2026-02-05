package MindTrace.repository;

import MindTrace.entities.Books;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository  extends JpaRepository<Books,Long> {
}
