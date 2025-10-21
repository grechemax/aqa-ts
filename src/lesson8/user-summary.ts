import User from './user';

export default class UserSummary {
    public fullInfo: string;

    public constructor(public user: User) {
        this.fullInfo = `id: ${user.id}\nname: ${user.name}\nemail: ${user.email}`;
    }
}
