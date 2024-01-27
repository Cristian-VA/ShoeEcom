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

