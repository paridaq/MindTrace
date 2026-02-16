package MindTrace.services;

import MindTrace.dtos.AddPeopleDto;
import MindTrace.dtos.PeopleSearchDto;
import MindTrace.entities.People;
import MindTrace.entities.User;
import MindTrace.repository.PeopleRepository;
import MindTrace.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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

    public List<People> getAllPeople(Long user_id){
        User user = userRepository.findById(user_id).orElseThrow();
        List<People> people = user.getPeople();
        return people;

    }
    //search people
    public List<People> searchPeople(Long user_id, PeopleSearchDto dto){
        User user = userRepository.findById(user_id).orElseThrow();
        List<People> peoples = user.getPeople();
        List<People>result = new ArrayList<>();

        for(People people:peoples){
            if(dto.getDesignation()!=null){
                if(dto.getDesignation()==people.getDesignation()){
                    result.add(people);
                }
            }
        }
        for(People people:peoples){
            if(dto.getCompany()!=null){
                if(dto.getCompany()==people.getCompany()){
                    result.add(people);
                }
            }
        }
        for(People people:peoples){
            if(dto.getName()!=null){
                if(dto.getName()==people.getName()){
                    result.add(people);
                }
            }
        }

        return result;


    }

}
