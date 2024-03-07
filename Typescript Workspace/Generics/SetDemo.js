// unique collection, non indexed collection
let cities = new Set();
cities.add("mumbai");
cities.add("Mumbai");
cities.add("mumbai");
cities.add("Thane");
cities.add("Pune");
console.log(cities);
console.log(cities.has('Pune'));
console.log(cities.delete('Pune'));
console.log(cities.has('Pune'));
console.log(cities.size);
cities.forEach(ele => console.log(ele));
let itr1 = cities.values();
while (true) {
    let entry = itr1.next();
    console.log(entry);
    if (entry.done)
        break;
    console.log(entry.value);
}
console.log("---------------");
let itr2 = cities.keys(); // set is not key-value pair collection
while (true) {
    let entry = itr2.next();
    console.log(entry);
    if (entry.done)
        break;
    console.log(entry.value);
}
console.log("---------------");
let itr3 = cities.entries(); // set is not key-value pair collection
while (true) {
    let entry = itr3.next();
    console.log(entry);
    if (entry.done)
        break;
    console.log(entry.value);
}
