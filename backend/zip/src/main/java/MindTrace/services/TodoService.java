package MindTrace.services;


import MindTrace.dtos.TodoDto;
import MindTrace.entities.Todo;
import MindTrace.entities.User;
import MindTrace.repository.TodoRepositroy;
import MindTrace.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class TodoService {

    @Autowired
    private TodoRepositroy todoRepositroy;
    @Autowired
    private UserRepository userRepository;

    public Todo addTodo(TodoDto dto,Long user_id){
        Todo todo = new Todo();
        todo.setName(dto.getName());
        todo.setCreated_at(new Date());
        todo.setImportant(dto.isImportant());
        User user = userRepository.findById(user_id).orElseThrow();
        todo.setUser(user);
        todoRepositroy.save(todo);
        return todo;

    }


}
