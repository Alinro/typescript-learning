// import { User } from './models/User';

// const user = new User({ name: 'myname', age: 20 });
// user.set({ name: 'alin' });

// user.on('change', () => {
//     console.log('#1');
// });
// user.on('change', () => {
//     console.log('#2');
// });
// user.on('save', () => {
//     console.log('#3');
// });

// user.trigger('click');

import axios from 'axios';
axios.post('http://localhost:3000/users', {
    name: 'alin',
    age: 20
});
