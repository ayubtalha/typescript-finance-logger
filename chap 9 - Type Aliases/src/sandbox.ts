type StringOrNum = string | number;
type ObjWithName = { name: string; uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(uid, item);
};

const greet = (user: ObjWithName) => {
  console.log(user.name, user.uid);
};

logDetails(1, 'Item');
greet({ name: 'Talha', uid: 23 });
