package MindTrace.services;

import MindTrace.dtos.TodoDto;
import MindTrace.entities.Todo;
import MindTrace.entities.User;
import MindTrace.repository.TodoRepositroy;
import MindTrace.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class TodoService {

    @Autowired
    private TodoRepositroy todoRepositroy;
    @Autowired
    private UserRepository userRepository;

    public Todo addTodo(TodoDto dto, Long user_id) {
        Todo todo = new Todo();
        todo.setName(dto.getName());
        todo.setCreated_at(new Date());
        todo.setImportant(dto.isImportant());
        User user = userRepository.findById(user_id).orElseThrow();
        todo.setUser(user);
        todoRepositroy.save(todo);
        return todo;

    }

    public List<Todo> getTodos(Long user_id) {
        User user = userRepository.findById(user_id).orElseThrow();
        return todoRepositroy.findByUser(user);
    }

    public Todo updateTodo(Long id, TodoDto dto) {
        Todo todo = todoRepositroy.findById(id).orElseThrow();
        todo.setName(dto.getName());
        todo.setImportant(dto.isImportant());
        return todoRepositroy.save(todo);
    }

    public void deleteTodo(Long id) {
        todoRepositroy.deleteById(id);
    }

    public Todo toggleImportant(Long id) {
        Todo todo = todoRepositroy.findById(id).orElseThrow();
        todo.setImportant(!todo.isImportant());
        return todoRepositroy.save(todo);
    }

}
