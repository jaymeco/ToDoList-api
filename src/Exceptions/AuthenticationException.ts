import { errors } from "../constants/errors";
import { ErrorScope } from "../Enums/ErrorScope"

class AuthenticationException {
  public readonly scope: number = ErrorScope.AUTHENTICATION;

  public invalidCredentials() {
    return {
      scope: this.scope,
      code: errors.AUTH_CREDENTIALS,
    };
  }

  public tokenNotFound() {
    return {
      scope: this.scope,
      code: errors.TOKEN_NOT_FOUND,
    };
  }

  public invalidToken() {
    return {
      scope: this.scope,
      code: errors.INVALID_TOKEN,
    };
  }


  public expiredToken() {
    return {
      scope: this.scope,
      code: errors.EXPIRED_TOKEN,
    };
  }
}

const authenticationException = new AuthenticationException();

export { authenticationException };
