import { BlobServiceClient } from "@azure/storage-blob";
import { envs } from "../../config/envs";

export const azureClient = new BlobServiceClient(
  `https://${envs.accountStorageName}.blob.core.windows.net/?${envs.azureToken}`
);
export const azureContainerClient = azureClient.getContainerClient(
  envs.azureContainer
);