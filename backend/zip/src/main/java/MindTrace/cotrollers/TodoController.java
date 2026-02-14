package MindTrace.cotrollers;

import MindTrace.dtos.TodoDto;
import MindTrace.entities.Todo;
import MindTrace.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/todo")
public class TodoController {
    @Autowired
    private TodoService todoService;

    @PostMapping("/{user_id}")
    public ResponseEntity<Todo> addTodo(@RequestBody TodoDto dto, @PathVariable Long user_id) {
        Todo todo = todoService.addTodo(dto, user_id);
        return ResponseEntity.ok(todo);
    }

    @GetMapping("/{user_id}")
    public ResponseEntity<List<Todo>> getTodos(@PathVariable Long user_id) {
        return ResponseEntity.ok(todoService.getTodos(user_id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable Long id) {
        todoService.deleteTodo(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable Long id, @RequestBody TodoDto dto) {
        return ResponseEntity.ok(todoService.updateTodo(id, dto));
    }

    @PutMapping("/{id}/toggle")
    public ResponseEntity<Todo> toggleImportant(@PathVariable Long id) {
        return ResponseEntity.ok(todoService.toggleImportant(id));
    }
}
