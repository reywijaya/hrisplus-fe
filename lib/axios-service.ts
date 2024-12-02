import axios from "axios";
import {LoginResponse, LoginData, UserModel, User} from "./type-definitions";
import {mapLoginResponseToModel, mapUserResponseToModel} from "@/lib/response-mapper";

// Axios Instance
const apiClient = axios.create({
    baseURL: "http://localhost:8000", // Update with your JSON server URL
    timeout: 5000,
});

// Fetch Login Data
export async function fetchLoginData(): Promise<LoginData> {
    try {
        // todo: need to update the method to POST later
        const response = await apiClient.get<LoginResponse>("/login");
        return mapLoginResponseToModel(response.data);
    } catch (error) {
        console.error("Error fetching login data:", error);
        throw new Error("Failed to fetch login data.");
    }
}

// Fetch User Data
export async function fetchUserData(): Promise<UserModel> {
    try {
        const response = await apiClient.get<User>("/users");
        console.log("response user", response.data);
        return mapUserResponseToModel(response.data);
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw new Error("Failed to fetch user data.");
    }
}
