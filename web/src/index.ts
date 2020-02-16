import { UserEdit } from './views/UserEdit';
import { User } from './models/User';
import { UserList } from './views/UserList';

const root = document.getElementById('root');

if (root) {
    // const userEdit = new UserEdit(
    //     root,
    //     User.buildUser({ name: 'NAME', age: 20 })
    // );
    // userEdit.render();
    // console.log(userEdit);

    const userCollection = User.buildUserCollection();
    userCollection.fetch();
    userCollection.on('change', () => {
        const userList = new UserList(root, userCollection);
        userList.render();
    });
} else {
    throw new Error('Root element not found');
}
