package kinSoftware.collaborative_platform.backend.authentication.repository;

import kinSoftware.collaborative_platform.backend.authentication.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

public interface UserRepository extends JpaRepository<User, String> {

   UserDetails findByLogin(String login);
}
