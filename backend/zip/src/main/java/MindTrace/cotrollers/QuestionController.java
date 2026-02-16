package MindTrace.cotrollers;

import MindTrace.dtos.AddQuestionDto;
import MindTrace.dtos.QuestionDto;
import MindTrace.entities.CodingProblems;
import MindTrace.entities.User;
import MindTrace.repository.UserRepository;
import MindTrace.services.ProblemService;
import org.aspectj.weaver.patterns.TypePatternQuestions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/questions")
public class QuestionController {
    @Autowired
    public ProblemService problemService;
    @Autowired
    private UserRepository userRepository;

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
    // get all the questions
       //get all the question of the specif user
    @GetMapping("/user_id")
   public ResponseEntity<List<CodingProblems>>getAllQuestions(@PathVariable Long user_id){
        User user = userRepository.findById(user_id).orElseThrow();
         return ResponseEntity.ok(user.getCodingProblems());
    }

    //edit the questions
    @PatchMapping("/{user_id}/{question_id}")
    public ResponseEntity<QuestionDto> editQuestion(@RequestBody QuestionDto questionDto,@PathVariable Long user_id,@PathVariable Long question_id){
       CodingProblems problem = problemService.editProblemDetails(user_id,question_id,questionDto);
           QuestionDto question = new QuestionDto();
           question.setQuestion_name(problem.getQuestion_name());
           question.setQuestion_link(problem.getQuestion_link());
           question.setDifficulty(problem.getDifficulty());
           question.setSolution_approach(problem.getSolution_approach());
           question.setTopic(problem.getTopic());
           return ResponseEntity.ok(question);



        }


        //search api
      @PostMapping("{user_id}/question/search")
       public ResponseEntity<CodingProblems>searchProblem(@RequestBody QuestionDto dto,@PathVariable Long user_id){


      }

    }






