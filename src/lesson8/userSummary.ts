import User from './user';

export default class UserSummary {
  fullInfo: string;

  constructor(user: User) {
    this.fullInfo = `id: ${user.id}\nname: ${user.name}\nemail: ${user.email}`;
  }
}