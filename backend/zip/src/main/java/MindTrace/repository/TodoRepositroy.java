package MindTrace.repository;

import MindTrace.entities.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepositroy extends JpaRepository<Todo,Long> {
}
