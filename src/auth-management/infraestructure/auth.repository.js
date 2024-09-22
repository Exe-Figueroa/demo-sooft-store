export class AuthSupabaseRepository {
  constructor(supabaseClient) {
    this.supabaseClient = supabaseClient;
  }
  signIn = async (email, password) => {
    try {
      const { data, error } = await this.supabaseClient.auth.signInWithPassword(
        {
          email,
          password,
        }
      );
      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      console.log("Error to signIn: ", error);
    }
  };
}
