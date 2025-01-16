# Azure Blob Storage Project

This project demonstrates how to create a container in Azure Blob Storage using TypeScript.

## Prerequisites

- Node.js installed
- Azure account
- Azure Storage account
- Environment variables set in a `.env` file

## Setup

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd azure
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your Azure Storage connection string:
    ```env
    AZURE_STORAGE_CONNECTION_STRING=<your-connection-string>
    ACCOUNT_NAME=<your-account-name>
    ```

4. Follow the instructions on this link to set up Login with Service Principal Secret in Azure:
    [Login with a Service Principal Secret](https://github.com/azure/login/tree/v2/?tab=readme-ov-file#login-with-a-service-principal-secret)

## Usage

To create a container in Azure Blob Storage, run the following command:
```sh
npx ts-node src/createContainer.ts
```

## License

This project is licensed under the ISC License.