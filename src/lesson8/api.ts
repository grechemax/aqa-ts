import User from './user';
import UserSummary from './user-summary';

const url = 'https://jsonplaceholder.typicode.com/users';

async function getUsers(): Promise<User[]> {
    return fetch(url)
        .then(res => res.json())
        .then(res => {
            return res.map((u: any) => new User(u.id, u.name, u.email));
        });
}

async function getUserByIndex(index: number): Promise<User> {
    const users: User[] = await getUsers();
    return users[index];
}

(async () => {
    const userX = await getUserByIndex(0);
    const summary = new UserSummary(userX);
    console.log(summary.fullInfo);
})();
