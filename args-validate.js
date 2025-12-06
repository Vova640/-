const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('No arguments provided');
  process.exit(1);
}
args.forEach(a => console.log('ARG:' + a));
