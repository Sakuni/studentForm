package hello.repository;

import hello.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Sakuni.Manamendra on 10/21/2016.
 */
public interface UserRepository extends JpaRepository<User, Integer> {

    //public User findById(Integer id);
}


