package hello;

import hello.dto.UserDTO;
import hello.model.User;
import hello.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

/**
 * Created by Sakuni.Manamendra on 10/20/2016.
 */
@RestController
public class MyController {

    @Autowired
    private UserRepository userRepository;

    // Get example
    @RequestMapping(value = "/myMarks",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Integer> getMarks() {
        return new ResponseEntity<>(500, HttpStatus.OK);
    }

    //    Post example
    @RequestMapping(value = "/postMarks",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Integer> postMarks(@Valid @RequestBody Integer data) {
        // can include any logic here to data
        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    // Update db with form data
    @RequestMapping(value = "/update",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserDTO> postMarks(@Valid @RequestBody UserDTO userDTO) {
        //Save user data to db
        User user = new User();
        user.setDate(userDTO.getDate());
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setAddress(userDTO.getAddress());
        user.setCity(userDTO.getCity());
        user.setState(userDTO.getState());
        user.setZip(userDTO.getZip());
        user.setCountry(userDTO.getCountry());
        user.setPhone(userDTO.getPhone());
        user.setEmail(userDTO.getEmail());
        user.setFav(userDTO.getFav());
        user.setColour(userDTO.getColour());

        User savedUser = userRepository.save(user);

        return new ResponseEntity<>(userDTO, HttpStatus.OK);
    }
}
