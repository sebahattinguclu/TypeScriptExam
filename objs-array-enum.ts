// const person: {
//     name: string,
//     age: number
// } = {

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;


enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
}


const person = {
    name: 'Sebaahttin',
    age: 28,
    hobies: ['futbol', 'kamp yapmak', 'spor yapmak'],
    role: Role.ADMIN
}

// person.role.push('admin')
// person.role[1] = 10;

let favoriAktivite: string[];
favoriAktivite = ['dfd', 'fgfg', '5', 'dfdf']
console.log(person)

for (const hoby of person.hobies) {
    console.log(hoby.toUpperCase())
}


if (person.role === Role.AUTHOR) {
    console.log('is AUTHOR')
}