package MindTrace.services;

import MindTrace.SmallServices;
import MindTrace.dtos.AddQuestionDto;
import MindTrace.dtos.QuestionDto;
import MindTrace.entities.CodingProblems;
import MindTrace.entities.User;
import MindTrace.repository.ProblemsRepository;
import MindTrace.repository.UserRepository;
import org.apache.tomcat.util.security.ConcurrentMessageDigest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProblemService {

    @Autowired
    private ProblemsRepository problemsRepository;

    @Autowired
    private SmallServices smallServices;

    @Autowired
    private UserRepository userRepository;

    public CodingProblems addProblems(AddQuestionDto dto, CodingProblems problem, Long user_id) {
        User user = userRepository.findById(user_id).orElseThrow();
        problem.setUser(user);
        problem.setQuestion_name(dto.getQuestion_name());
        problem.setQuestion_link(dto.getQuestion_link());
        String platform = smallServices.getPlatformName(dto.getQuestion_link());
        problem.setPlatform(platform);
        problem.setDifficulty(dto.getDifficulty());
        problem.setSolution_approach(dto.getSolution_approach());
        problem.setTopic(dto.getTopic());
        problemsRepository.save(problem);
        return problem;

    }

    public CodingProblems editProblemDetails(Long user_id, Long question_id, QuestionDto dto){
        User user = userRepository.findById(user_id).orElseThrow();
        List<CodingProblems> problems = user.getCodingProblems();
        for(CodingProblems problem :problems){
            if (problem.getId()==question_id){
                  if(dto.getQuestion_name()!=null){
                      problem.setQuestion_name(dto.getQuestion_name());
                  }
                  if(dto.getQuestion_link()!=null){
                      problem.setQuestion_link(dto.getQuestion_link());
                  }
                  if(dto.getDifficulty()!=null){
                      problem.setDifficulty(dto.getDifficulty());
                  }
                  if(dto.getSolution_approach()!=null){
                      problem.setSolution_approach(dto.getSolution_approach());
                  }
                  if(dto.getTopic()!=null){
                      problem.setTopic(dto.getTopic());
                  }
                  return problemsRepository.save(problem);
            }
        }
        return null;




    }
    public List<CodingProblems> searchProblems(QuestionDto dto,Long user_id){
        User user = new User();
      List<CodingProblems>problems =  user.getCodingProblems();

      for(CodingProblems problem: problems){

      }
    }
}
