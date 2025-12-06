const [op, ...rest] = process.argv.slice(2);
const nums = rest.map(Number);

function result(op, nums) {
  if (!nums.length) return null;
  switch(op) {
    case 'add': return nums.reduce((a,b) => a + b, 0);
    case 'sub': return nums.reduce((a,b) => a - b);
    case 'mul': return nums.reduce((a,b) => a * b, 1);
    case 'div': return nums.reduce((a,b) => a / b);
    default: return null;
  }
}

const res = result(op, nums);
if (res === null || !isFinite(res)) {
  console.log('Invalid operation or arguments');
} else {
  console.log('Result = ' + res);
}
