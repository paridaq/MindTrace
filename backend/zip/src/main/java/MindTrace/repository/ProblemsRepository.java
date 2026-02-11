package MindTrace.repository;

import MindTrace.entities.CodingProblems;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProblemsRepository extends JpaRepository<CodingProblems,Long> {
}
