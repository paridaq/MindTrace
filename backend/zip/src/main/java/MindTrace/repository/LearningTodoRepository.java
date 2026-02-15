package MindTrace.repository;

import MindTrace.entities.LearningTodo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LearningTodoRepository extends JpaRepository<LearningTodo,Long> {
}
