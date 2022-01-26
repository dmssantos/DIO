import User from "../models/user.model";
import db from '../db';


class UserRepositoty {

  async findAllUsers(): Promise<User[]> {
    const query = `
      SELECT uuid, username
      FROM application_user
    `;

    const { rows } = await db.query<User>(query);

    return rows || [];
  }

  async findById(uuid: string): Promise<User> {
    const query = `
      SELECT uuid, username
      FROM application_user
      WHERE uuid = $1
    `;

    const values = [uuid]

    const { rows } = await db.query<User>(query, values);

    const [ user ] = rows;

    return user;
  }
}

export default new UserRepositoty();