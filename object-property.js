const students = [
    {id:1, name: "Omor Sani"},
    {id:2, name: "Manna"},
    {id:3, name: "Mousumi"},
    {id:4, name: "Shabana"}
];

// const names = [];

const names = students.map(x => x.name);
const ids = students.filter(x => x.id > 2);
console.log(names);
console.log(ids);

