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
      console.error("Error to signIn: ", error);
      throw error;
    }
  };
  getUser = async () => {
    try {
      const {
        data: { user },
      } = await this.supabaseClient.auth.getUser();

      return user;
    } catch (error) {
      console.error("Error to getUser: ", error);
      throw error;
    }
  };
  logOut = async () => {
    try {
      let { error } = await this.supabaseClient.auth.signOut();
      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      console.error("Error to logOut: ", error);
      throw error;
    }
  };
}
