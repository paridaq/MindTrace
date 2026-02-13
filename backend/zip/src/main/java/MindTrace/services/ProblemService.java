package MindTrace.services;

import MindTrace.SmallServices;
import MindTrace.dtos.AddQuestionDto;
import MindTrace.entities.CodingProblems;
import MindTrace.entities.User;
import MindTrace.repository.ProblemsRepository;
import MindTrace.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        problemsRepository.save(problem);
        return problem;

    }
}
