// Map Login Response to LoginData Model
import {LoginData, LoginResponse, User, UserModel} from "@/lib/type-definitions";

export function mapLoginResponseToModel(response: LoginResponse): LoginData {
    const {status, tokenPermission} = response.data;
    const decodedToken = JSON.parse(atob(tokenPermission.split('.')[1]));

    return {
        isActive: status === "ACTIVE",
        userName: decodedToken.userName,
        email: decodedToken.email,
        contactNumber: decodedToken.contactNumber,
        expiredDate: decodedToken.expiredDate,
        token: tokenPermission,
        permissions: {
            role: decodedToken.role,
            isPrivilege: decodedToken.isPrivilege,
            menus: decodedToken.menu,
            actions: decodedToken.action,
        },
    };
}

// Map User Response to UserModel Array
export function mapUserResponseToModel(response: User): UserModel {
    return {
        userId: response.id,
        userEmail: response.email,
        userPassword: response.password,
        userName: response.name,
        userRole: response.role,
    }
}
