const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple
} = {
// const person = {
	name: 'Keisaku',
  age: 32,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};

person.role.push('admin'); // 'push()' is allowed to add a new element to a tuple...why?

let favoriteActivities: any[];
favoriteActivities = ['Sports', 1]
console.log(person.name);

for (const hobby of person.hobbies) [
  console.log(hobby.toUpperCase())
]

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUITHOR = 2;

// enum Role {
//   ADMIN = 5, READ_ONLY = 2, AUTHOR = 300
// };

// const person = {
// 	name: 'Keisaku',
// 	age: 32,
// 	hobbies: ['Sports', 'Cooking'],
// 	role: Role.ADMIN
// };

// if (person.role === Role.READ_ONLY) {
//   console.log('is only read')
// }
