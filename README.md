# Azure Container Deploy Project

![Build Status](https://github.com/Ridvan-bot/azure/actions/workflows/deploy.yml/badge.svg)
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/Ridvan-bot/azure?label=version&sort=semver)
![Last Commit](https://img.shields.io/github/last-commit/Ridvan-bot/azure)
![GitHub issues](https://img.shields.io/github/issues/Ridvan-bot/azure)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Ridvan-bot/azure)

## Prerequisites

- Node.js installed
- Azure account
- Azure Storage account
- Environment variables set in a `.env` file

## Setup

1. **Clone the repository:**
    ```sh
    git clone <repository-url>
    cd azure
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Create a `.env` file:**
    Add your Azure Storage connection string and account name:
    ```env
    AZURE_STORAGE_CONNECTION_STRING=<your-connection-string>
    ACCOUNT_NAME=<your-account-name>
    ```

4. **Create a resource group in Azure:**
    ```sh
    az group create --name myResourceGroup --location northeurope
    ```
    Verify the resource group creation:
    ```sh
    az acr list --resource-group myResourceGroup --query "[].{Name:name,LoginServer:loginServer}" -o table
    ```

5. **Set up Login with Service Principal Secret:**
    Follow the instructions [here](https://github.com/azure/login/tree/v2/?tab=readme-ov-file#login-with-a-service-principal-secret).

6. **Create GitHub secrets:**
    - `ACR_NAME`
    - `AZURE_CREDENTIALS`

    Update/modify `deploy.yml` if needed.

## Usage

A git push will trigger deploy.yml to build container image, push image to azure container registries (ACR) and deploy container.

## License

This project is licensed under the ISC License.

##
<p align="center">
  Crafted with care by <strong>Robin Pohlman</strong> at <strong>Pohlman Protean AB</strong>.
</p>
