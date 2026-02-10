package MindTrace.cotrollers;


import MindTrace.dtos.AddQuestionDto;
import MindTrace.dtos.QuestionDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/questions")
public class QuestionController {
    @Autowired
    public

    @PostMapping()
    public ResponseEntity<QuestionDto> addQuestion(@RequestBody AddQuestionDto dto, @RequestParam Long user_id){

    }


}
