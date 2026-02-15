package MindTrace.cotrollers;


import MindTrace.dtos.LearningTodoDto;
import MindTrace.entities.LearningTodo;
import MindTrace.services.LearningTodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/learningTodo")
public class LearningTodoController {
    @Autowired
    private LearningTodoService learningTodoService;
   @PostMapping("{user_id}")
    public ResponseEntity<LearningTodo>addLearningTask(@RequestBody LearningTodoDto dto, @PathVariable Long user_id){
        LearningTodo learning = learningTodoService.addLearning(dto,user_id);
        return ResponseEntity.ok(learning);
    }

}
