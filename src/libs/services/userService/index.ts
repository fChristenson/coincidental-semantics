import { IUser, User } from "../../user";
import { IUserUpdates } from "./userUpdates";

export class UserService {
  getUser(userId: string): Promise<IUser> {
    //TODO: get user from db
    return Promise.resolve(User("Jon Doe"));
  }

  saveUser(user: IUser): Promise<IUser> {
    //TODO: save to db
    return Promise.resolve(user);
  }

  async updateUser(userId: string, updates: IUserUpdates): Promise<IUser> {
    //TODO: save to db
    const userToUpdate = await this.getUser(userId);
    userToUpdate.name = updates.name || userToUpdate.name;

    const savedUser = await this.saveUser(userToUpdate);

    return Promise.resolve(savedUser);
  }
}
