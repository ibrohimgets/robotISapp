import { Client, Account, Databases } from "appwrite";
/**************************************************************/

const projectID = "64849b345d21d5ce9b57";
const apiEndpoint = "https://cloud.appwrite.io/v1";
/**************************************************************/

const client = new Client().setEndpoint(apiEndpoint).setProject(projectID);

/**************************************************************/

/**************************************************************/
export const account = new Account(client);
export const dataBase = new Databases(client);
