package MindTrace.services;

import MindTrace.dtos.AddPeopleDto;
import MindTrace.entities.People;
import MindTrace.entities.User;
import MindTrace.repository.PeopleRepository;
import MindTrace.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PeopleService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PeopleRepository peopleRepository;

    public People addPeople(AddPeopleDto dto, Long user_id) {
        People people = new People();
        people.setName(dto.getName());
        people.setEmail(dto.getEmail());
        people.setCompany(dto.getCompany());
        people.setDesignation(dto.getDesignation());
        people.setLinkedin_url(dto.getLinkedin_url());

        User user = userRepository.findById(user_id).orElseThrow(() -> new RuntimeException("User not found"));
        people.setUser(user);

        return peopleRepository.save(people);
    }

}
