
import { ID, Query } from "appwrite"

import { account, appwriteConfig,  databases,  } from "./config";


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

// Fetch Products

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


export async function getWomenCollection(category: string) {
  const queries: any[] = [Query.equal("category", category)];

  try {
    const womenProducts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.womenCollectionId,
      queries
    );

    return womenProducts;
  } catch (error) {
    console.log(error);
  }
}

export async function getKidsCollection(category: string) {
  const queries: any[] = [Query.equal("category", category)];

  try {
    const kidsProducts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.kidsCollectionId,
      queries
    );

    return kidsProducts;
  } catch (error) {
    console.log(error);
  }
}


//Fetch by Id

export async function getMenProductById(productId: string) {
  try {
    const product = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.menCollectionId,
      productId
    );

    return product;
  } catch (error) {
    console.log(error);
  }
}

export async function getWomenProductById(productId: string) {
  try {
    const product = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.womenCollectionId,
      productId
    );

    return product;
  } catch (error) {
    console.log(error);
  }
}

export async function getKidsProductById(productId: string) {
  try {
    const product = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.kidsCollectionId,
      productId
    );

    return product;
  } catch (error) {
    console.log(error);
  }
}


//Fetch related Products

export async function getMenRelatedProducts(productId: string, category:string){
  const queries:any[] = [Query.notEqual("$id", [productId]), Query.limit(2), Query.equal("category", [category])]
  try {
    const relatedProducts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.menCollectionId,
      queries
    )
    return relatedProducts
  } catch (error) {
    console.log(error)
  }
}

export async function getWomenRelatedProducts(productId: string, category:string){
  const queries:any[] = [Query.notEqual("$id", [productId]), Query.limit(2), Query.equal("category", [category])]
  try {
    const relatedProducts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.womenCollectionId,
      queries
    )
    return relatedProducts
  } catch (error) {
    console.log(error)
  }
}

export async function getKidsRelatedProducts(productId: string, category:string){
  const queries:any[] = [Query.notEqual("$id", [productId]), Query.limit(2), Query.equal("category", [category])]
  try {
    const relatedProducts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.kidsCollectionId,
      queries
    )
    return relatedProducts
  } catch (error) {
    console.log(error)
  }
}