"use strict";
const logDetails = (uid, item) => {
    console.log(uid, item);
};
const greet = (user) => {
    console.log(user.name, user.uid);
};
logDetails(1, 'Item');
greet({ name: 'Talha', uid: 23 });
