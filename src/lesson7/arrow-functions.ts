export {};
const sumArray = (arr: (string | number)[]): number =>
    arr.reduce((sum: number, item: (string | number)): number =>   {
        const num = Number(item);
        return !isNaN(num) ? sum + num : sum;
    }, 0);

const numbers2: number[] = [100, 200, 300];
const strings2: string[] = ['5', '15', '25'];

console.log('Number array sum:', sumArray(numbers2));
console.log('String array sum:', sumArray(strings2));
