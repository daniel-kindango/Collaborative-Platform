package kinSoftware.collaborative_platform.backend.authentication.user;

public record RegisterDTO(

   String login,

   String password,

   UserRole role

) {
}
