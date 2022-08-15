const json = {
    color:'black',
    size:'L',
    price:'10000'
};

const a = JSON.stringify(json);

console.log (a);
console.log (typeof a);

const b = JSON.parse(a);

console.log (b);
console.log (b.color);