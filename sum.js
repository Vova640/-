const args = process.argv.slice(2).map(Number);
const sum = args.reduce((s, x) => s + (isFinite(x) ? x : 0), 0);
console.log('Sum = ' + sum);
