
function sumArray(arr: (string | number)[]): number {
    let sum = 0;
    for (const item of arr) {
        if (!isNaN(Number(item))) {
            sum += Number(item);
        } else {
            console.warn(`Entered value is not a number: ${item}`);
        }
    }
    return sum;
}

const numbers: number[] = [100, 200, 300];
const strings: string[] = ['5', '15', '25'];

const sumNumbers = sumArray(numbers);
const sumStrings = sumArray(strings);

console.log('Number array sum:', sumNumbers);
console.log('String array sum:', sumStrings);
