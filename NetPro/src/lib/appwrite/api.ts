import { INewUser } from '@/types';

import { ID, Query } from "appwrite"

import { account, appwriteConfig, avatars, databases, storage } from "./config";


export async function saveUserToDB(user: {
  accountId?: string;
  email?: string;
  name?: string;
  imageUrl?: URL;
  username?: string;
}) {
  try {
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      user
    );

    return newUser;
  } catch (error) {
    console.log(error);
   
  }
}
export async function signInAccount(user: { email: string; password: string }) {
  try {
    const session = await account.createEmailSession(user.email, user.password);

    return session;
  } catch (error) {
    console.log(error);
  }
}

export async function signOutAccount() {
  try {
    const session = await account.deleteSession("current");

    return session;
  } catch (error) {
    console.log(error);
  }
}

export async function getCurrentUser() {
  try {
    const currentAccount = await account.get();

    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
  }
}

export async function getMenCollection(category: string) {
  const queries: any[] = [Query.equal("category", category)];

  try {
    const menProducts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.menCollectionId,
      queries
    );

    return menProducts;
  } catch (error) {
    console.log(error);
  }
}