
import { ID, Query } from "appwrite"

import { account, appwriteConfig,  databases,  } from "./config";
import { Filters } from "@/types";

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
export async function getMenCollection(fetchParams: { category: string; filters?: Filters }) {
  const commonQueries: any[] = [Query.limit(6), Query.equal("category", fetchParams.category)];

  if (fetchParams?.filters?.bestFor) {
    commonQueries.push(Query.equal("bestFor", fetchParams.filters.bestFor));
  }

  if (fetchParams?.filters?.currentSort === "expensive") {
    commonQueries.push(Query.orderDesc("price"));
  } else if (fetchParams?.filters?.currentSort === "cheap") {
    commonQueries.push(Query.orderAsc("price"));
  } else if (fetchParams?.filters?.currentSort === "newest") {
    commonQueries.push(Query.orderAsc("$createdAt"));
  } else if (fetchParams?.filters?.currentSort === "oldest") {
    commonQueries.push(Query.orderDesc("$createdAt"));
  }

  try {
    const Page1 = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.menCollectionId,
      [...commonQueries, Query.offset(0)]
    );

    const lastId = Page1?.documents[Page1.documents.length - 1]?.$id;
    const Page2 = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.menCollectionId,
      [...commonQueries, Query.cursorAfter(lastId)]
    );

    // Check if Page2 is empty
    if (Page2?.length === 0) {
      return { Page1 };
    } else {
      return { Page1, Page2 };
    }
  } catch (error) {
    console.log(error);
  }
}




export async function getWomenCollection(fetchParams: { category: string; filters?: Filters}) {
  const commonQueries: any[] = [Query.limit(6), Query.equal("category", fetchParams.category)];

  if (fetchParams?.filters?.bestFor) {
    commonQueries.push(Query.equal("bestFor", fetchParams.filters.bestFor));
  }

  if (fetchParams?.filters?.currentSort === "expensive") {
    commonQueries.push(Query.orderDesc("price"));
  } else if (fetchParams?.filters?.currentSort === "cheap") {
    commonQueries.push(Query.orderAsc("price"));
  } else if (fetchParams?.filters?.currentSort === "newest") {
    commonQueries.push(Query.orderAsc("$createdAt"));
  } else if (fetchParams?.filters?.currentSort === "oldest") {
    commonQueries.push(Query.orderDesc("$createdAt"));
  }
  

  try {
    const Page1 = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.womenCollectionId,
      [...commonQueries, Query.offset(0)]
    );

    const lastId = Page1.documents[Page1.documents.length - 1].$id;
    const Page2 = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.womenCollectionId,
      [...commonQueries, Query.cursorAfter(lastId)]
    );

    // Check if Page2 is empty
    if (Page2?.length === 0) {
      return { Page1 };
    } else {
      return { Page1, Page2 };
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getKidsCollection(fetchParams: { category: string; filters?: Filters}) {
  const commonQueries: any[] = [Query.limit(6), Query.equal("category", fetchParams.category)];

  if (fetchParams?.filters?.bestFor) {
    commonQueries.push(Query.equal("bestFor", fetchParams.filters.bestFor));
  }

  if (fetchParams?.filters?.currentSort === "expensive") {
    commonQueries.push(Query.orderDesc("price"));
  } else if (fetchParams?.filters?.currentSort === "cheap") {
    commonQueries.push(Query.orderAsc("price"));
  } else if (fetchParams?.filters?.currentSort === "newest") {
    commonQueries.push(Query.orderAsc("$createdAt"));
  } else if (fetchParams?.filters?.currentSort === "oldest") {
    commonQueries.push(Query.orderDesc("$createdAt"));
  }
  

  try {
    const Page1 = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.kidsCollectionId,
      [...commonQueries, Query.offset(0)]
    );

    const lastId = Page1.documents[Page1.documents.length - 1].$id;
    const Page2 = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.kidsCollectionId,
      [...commonQueries, Query.cursorAfter(lastId)]
    );

    // Check if Page2 is empty
    if (Page2?.length === 0) {
      return { Page1 };
    } else {
      return { Page1, Page2 };
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getSocksCollection(fetchParams: { category: string; filters?: Filters}) {
  const commonQueries: any[] = [Query.limit(6)];

  if (fetchParams?.filters?.bestFor) {
    commonQueries.push(Query.equal("bestFor", fetchParams.filters.bestFor));
  }

  if (fetchParams?.filters?.currentSort === "expensive") {
    commonQueries.push(Query.orderDesc("price"));
  } else if (fetchParams?.filters?.currentSort === "cheap") {
    commonQueries.push(Query.orderAsc("price"));
  } else if (fetchParams?.filters?.currentSort === "newest") {
    commonQueries.push(Query.orderAsc("$createdAt"));
  } else if (fetchParams?.filters?.currentSort === "oldest") {
    commonQueries.push(Query.orderDesc("$createdAt"));
  }
  

  try {
    const Page1 = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.socksCollectionId,
      [...commonQueries, Query.offset(0)]
    );

    const lastId = Page1.documents[Page1.documents.length - 1].$id;
    const Page2 = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.socksCollectionId,
      [...commonQueries, Query.cursorAfter(lastId)]
    );

    // Check if Page2 is empty
    if (Page2?.length === 0) {
      return { Page1 };
    } else {
      return { Page1, Page2 };
    }
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

export async function getSocksById(productId: string) {
  try {
    const product = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.socksCollectionId,
      productId
    );

    return product;
  } catch (error) {
    console.log(error);
  }
}



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

export async function getSocksRelatedProducts(productId: string, category:string){
  const queries:any[] = [Query.notEqual("$id", [productId]), Query.limit(2), Query.equal("category", [category])]
  try {
    const relatedProducts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.socksCollectionId,
      queries
    )
    return relatedProducts
  } catch (error) {
    console.log(error)
  }
}

export async function getMenFeaturedProducts(){
  const queries:any[] = [ Query.equal("isFeatured", true)]
  try {
    const featuredProducts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.menCollectionId,
      queries
    )
    return featuredProducts
  } catch (error) {
    console.log(error)
  }
}


export async function getWomenFeaturedProducts(){
  const queries:any[] = [ Query.equal("isFeatured", true)]
  try {
    const featuredProducts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.womenCollectionId,
      queries
    )
    return featuredProducts
  } catch (error) {
    console.log(error)
  }
}