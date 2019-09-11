let Sum = 0;
for (let i = 2; i < process.argv.length; i++) {
  Sum += Number(process.argv[i]);
}
console.log(Sum);
