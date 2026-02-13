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

    @PostMapping("/{user_id}")
    public ResponseEntity<QuestionDto> addQuestion(@RequestBody AddQuestionDto dto, @PathVariable Long user_id) {
        CodingProblems problem = new CodingProblems();
        CodingProblems savedProblem = problemService.addProblems(dto, problem, user_id);
        QuestionDto responseDto = new QuestionDto();
        responseDto.setId(savedProblem.getId());
        responseDto.setQuestion_name(savedProblem.getQuestion_name());
        responseDto.setQuestion_link(savedProblem.getQuestion_link());
        responseDto.setDifficulty(savedProblem.getDifficulty());
        responseDto.setSolution_approach(savedProblem.getSolution_approach());
        responseDto.setTopic(savedProblem.getTopic());
        return ResponseEntity.ok(responseDto);

    }

}
