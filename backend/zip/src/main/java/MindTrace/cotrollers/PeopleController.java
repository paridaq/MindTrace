package MindTrace.cotrollers;

import MindTrace.dtos.PeopleDto;
import MindTrace.dtos.AddPeopleDto;
import MindTrace.dtos.PeopleSearchDto;
import MindTrace.entities.People;
import MindTrace.services.PeopleService;
import org.hibernate.type.ListType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/people")
public class PeopleController {

  @Autowired
  private PeopleService peopleService;

  @PostMapping("{user_id}")
  public ResponseEntity<PeopleDto> addPeople(@RequestBody AddPeopleDto dto, @PathVariable Long user_id) {
    People people = peopleService.addPeople(dto, user_id);

    PeopleDto response = new PeopleDto();
    response.setId(people.getId());
    response.setName(people.getName());
    response.setEmail(people.getEmail());
    response.setCompany(people.getCompany());
    response.setDesignation(people.getDesignation());
    response.setLinkedin_url(people.getLinkedin_url());

    return ResponseEntity.ok(response);
  }

  //get all the people
  @GetMapping("/{user_id}")
  public ResponseEntity<List<People>> getAllPeople(@PathVariable Long user_id){
                List<People> people  = peopleService.getAllPeople(user_id);
                return ResponseEntity.ok(people);
  }


  //serach for the people
  @PostMapping("/{user_id}/searchPeople")
  public ResponseEntity<List<People>> serachPeople(@PathVariable Long user_id, PeopleSearchDto dto){

       List<People>people = peopleService.searchPeople(user_id,dto);
       return ResponseEntity.ok(people);

  }

  @GetMapping("{user_id}/addToday")
  public ResponseEntity<List<People>>addToday(@PathVariable Long user_id){
    List<People>people = peopleService.addToday(user_id);
    return ResponseEntity.ok(people);
  }





}
