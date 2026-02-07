
// duplicate name remove

const biriyaniKhor = [ 'abul', 'babul', 'kabul', 'sabul', 'mokbul', 'sabul'];
const number = [1, 23, 34, 45, 56, 67];

function noDuplicate(array){
    const unique = [];
    for(const iteam of array){
        if(unique.includes(iteam) === false ){
            unique.push(iteam);
        }
    }
    return unique;
}
const uniqueArray = noDuplicate(biriyaniKhor);
console.log(uniqueArray);

// min and max

const min = Math.min(1, 23, 34, 45, 56, 67)
console.log(min);
const max = Math.max(1, 23, 34, 45, 56, 67)
console.log(max);

// pi value

console.log(Math.PI);

// gap

console.log(Math.abs(20-60));

// round number / cill

console.log(Math.round(2.88));
console.log(Math.ceil(4.08));

// random
console.log(Math.random())
console.log(Math.random()*10)
const rand = Math.round(Math.random()*10)
console.log(rand)




