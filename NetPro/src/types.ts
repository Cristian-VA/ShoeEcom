export type INewUser = {
    name: string,
    email: string,
    username: string,
    password: string
}

export type IUser = {
    id: string,
    name: string,
    username: string,
    email: string,
    imageUrl: string,
    
}

export type IContextType = {
    user: any,
    loginUser: any,
    logoutUser: any,
    checkUserStatus: any,
    registerUser: any

    
}

export type CustomHookResult = {
    product: any | null;
    isLoading: boolean | null;
    isFetched: boolean | null;
    relatedProducts: any | null;
  }

  export type Filters = {
    currentSize: string[] | null;
    bestFor?: string[] | null;
    currentSort: string | null;
  }

  export type HomeCardProps = {
    productName: string,
    LinkMen?:string,
    LinkWomen?:string,
    tags:string,
    imgUrl: string

  }

  export type order = {
    productsName: string[],
    quantities: number[],
    subtotal: number,
    colors: string[],
    size: string[],
    userId: any,
    images:string[]

  }


