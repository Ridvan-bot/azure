import { BlobServiceClient } from "@azure/storage-blob";
import { DefaultAzureCredential } from "@azure/identity";
import dotenv from "dotenv";

// Läs in .env-filen
dotenv.config();

async function createContainer() {
    const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;

    if (!AZURE_STORAGE_CONNECTION_STRING) {
        throw new Error("Azure Storage Connection string not found");
    }

    // Använd DefaultAzureCredential för autentisering
    const credential = new DefaultAzureCredential();
    const blobServiceClient = new BlobServiceClient(
        `https://${process.env.ACCOUNT_NAME}.blob.core.windows.net`,
        credential
    );

    // Skapa en container
    const containerName = "pohlman-protean2";
    const containerClient = blobServiceClient.getContainerClient(containerName);

    const createContainerResponse = await containerClient.create();
    console.log(`Container was created successfully. requestId: ${createContainerResponse.requestId}`);
}

createContainer().catch((err) => {
    console.error("Error creating container:", err.message);
});