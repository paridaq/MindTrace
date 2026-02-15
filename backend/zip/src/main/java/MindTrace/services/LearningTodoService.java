package MindTrace.services;


import MindTrace.dtos.LearningTodoDto;
import MindTrace.entities.LearningTodo;
import MindTrace.entities.User;
import MindTrace.repository.LearningTodoRepository;
import MindTrace.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class LearningTodoService {
    @Autowired
    private LearningTodoRepository learningTodoRepository;
    @Autowired
    private UserRepository userRepository;


    public LearningTodo addLearning(LearningTodoDto dto,Long user_id){
        LearningTodo learning = new LearningTodo();
        learning.setSubject(dto.getSubject());
        learning.setCreated_at(new Date());
        learning.setPriority(dto.isPriority());
        learning.setResources(dto.getResources());
        learning.setAnylink(dto.getAnyLink());
        User user = userRepository.findById(user_id).orElseThrow();
        learning.setUser(user);
        return learningTodoRepository.save(learning);
    }
}
