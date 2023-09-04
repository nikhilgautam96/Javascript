import data from './data.json' assert { type: 'json' };

console.log(data);
console.log(data.person1[0].first + ' ' + data.person1[0].last); // "Nicole Adelstein"
console.log(data.person2[0].first + ' ' + data.person2[0].last); // "Pleuni Pennings"
console.log(data.person3[0].first + ' ' + data.person3[0].last); // "Rori Rohlfs"

// Using fetch()

fetch('./data.json')
    .then((res) => res.json())
    .then((finalRes) => console.log(finalRes));
