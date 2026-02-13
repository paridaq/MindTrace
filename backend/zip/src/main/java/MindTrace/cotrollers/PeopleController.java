package MindTrace.cotrollers;

import MindTrace.dtos.PeopleDto;
import MindTrace.dtos.AddPeopleDto;
import MindTrace.entities.People;
import MindTrace.services.PeopleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
}
