package MindTrace.repository;

import MindTrace.entities.People;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PeopleRepository extends JpaRepository<People,Long> {
}
