

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

enum Role {ADMIN, AUTHOR, READ_ONLY};

const person = {
    name: 'Piotr',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

//person.role.push('admin');
//person.role[0] = 10


let favoriteAvtivities: string[];
favoriteAvtivities = ['Sports']

console.log(person)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}


if (person.role === Role.ADMIN) {
    console.log('is admin')
}