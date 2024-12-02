// Login Response Types
export interface LoginResponse {
    result: {
        resultCode: string;
        resultDescription: string;
    };
    data: {
        status: string;
        tokenVerification: string | null;
        tokenPermission: string;
    };
}

// Login Data Model
export interface LoginData {
    isActive: boolean;
    userName: string;
    email: string;
    contactNumber: string;
    expiredDate: string;
    token: string;
    permissions: {
        role: string;
        isPrivilege: boolean;
        menus: number[];
        actions: number[];
    };
}

// User Data Response Types
// export interface UserResponse {
//     user: User;
// }

// is it really necessary?
export interface User {
    id: string;
    email: string;
    password: string;
    name: string;
    role: string;
}

// User Model
export interface UserModel {
    userId: string;
    userEmail: string;
    userPassword: string;
    userName: string;
    userRole: string;
}