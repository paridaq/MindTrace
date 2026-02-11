package MindTrace.cotrollers;

import MindTrace.dtos.AddQuestionDto;
import MindTrace.dtos.QuestionDto;
import MindTrace.entities.CodingProblems;
import MindTrace.services.ProblemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/questions")
public class QuestionController {
    @Autowired
    public ProblemService problemService;

    @PostMapping()
    public ResponseEntity<QuestionDto> addQuestion(@RequestBody AddQuestionDto dto, @RequestParam Long user_id) {
        CodingProblems problem = new CodingProblems();
        CodingProblems problem1 = problemService.addProblems(dto, problem, user_id);
        QuestionDto dtoo = new QuestionDto();
        dtoo.setId(problem1.getId());
        dtoo.setQuestion_name(problem1.getQuestion_name());
        dtoo.setQuestion_link(problem1.getQuestion_link());
        dtoo.setDifficulty(problem1.getDifficulty());
        dtoo.setSolution_approach(problem1.getSolution_approach());
        return ResponseEntity.ok(dtoo);

    }

}
