// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: 'Piotr',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: 'admin'
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
})(Role || (Role = {}));
;
var person = {
    name: 'Piotr',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
//person.role.push('admin');
//person.role[0] = 10
var favoriteAvtivities;
favoriteAvtivities = ['Sports'];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
