import { Client, Account, Databases, Storage, Avatars } from "appwrite"


export const appwriteConfig = {
    url:import.meta.env.VITE_APPWRITE_URL,
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
    userCollectionId: import.meta.env.VITE_APPWRITE_USERSCOLLECTION_ID,
    menCollectionId: import.meta.env.VITE_APPWRITE_MENCOLLECTION_ID,
    womenCollectionId: import.meta.env.VITE_APPWRITE_WOMENCOLLECTION_ID,
    kidsCollectionId:import.meta.env.VITE_APPWRITE_KIDSCOLLECTION_ID,
    socksCollectionId:import.meta.env.VITE_APPWRITE_SOCKSCOLLECTION_ID,
    ordersCollectionId:import.meta.env.VITE_APPWRITE_ORDERSCOLLECTION_ID,
    singleOrdersCollectionId:import.meta.env.VITE_APPWRITE_SINGLEORDERCOLLECTION_ID
}

export const client = new Client()

client.setEndpoint("https://cloud.appwrite.io/v1")
client.setProject("65aff7c117ff500520b5");

export const account = new Account(client)
export const databases = new Databases(client)
export const storage = new Storage(client)
export const avatars = new Avatars(client)