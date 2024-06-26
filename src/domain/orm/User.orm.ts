import { userEntity } from "../entities/User.entity";
import { LogError, LogSuccess } from "@/utils/logger";

//CRUD

/**
 * Method to obtain all User from Collection "Users" in Mongo Server
 */
export const GetAllUsers = async (): Promise<any[] | undefined> => {
  try {
    let userModel = userEntity();
    // Search all users
    return await userModel.find({ isDelete: false });
  } catch (error) {
    LogError(`[ORM ERROR]: Getting All Users: ${error} `);
  }
};

// TODO
// - Get User By Id
// - Get User By Email
// - Delete User By Id
// - Create New User 
// - Update User By Id