export const envs = {
  azureToken: import.meta.env.VITE_AZURE_CONTAINER_TOKEN_SAS,
  azureUrl: import.meta.env.VITE_AZURE_CONTAINER_URL_SAS,
  azureContainer: import.meta.env.VITE_AZURE_CONTAINER_NAME,
  accountStorageName: import.meta.env.VITE_ACCOUNT_STORAGE_NAME,
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
};
