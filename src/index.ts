const testNum: number = 123;
const testStr: string = 'this is test.';
const testArr: string[] = ['hoge', 'fuga', 'piyo'];


Number.isSafeInteger(testNum);

const arrayMapped = testArr.map(element => {
  return element + "aaaaa! ";
});

console.log(`${testNum} ${testStr}`);
console.log('hogehoge!');
console.log('----');

console.log(...testArr);
console.log(...arrayMapped);
