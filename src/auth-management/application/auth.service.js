export class AuthService {
  constructor(authRepository) {
    this.authRepository = authRepository;
  }
  signIn = async (email, password) => {
    return await this.authRepository.signIn(email, password);
  };
}
