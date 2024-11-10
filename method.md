### 많이 쓰이는 표준 내장 객체

##### 1. Array.prototype.filter()

배열의 일부에 대한 얕은 복사본을 생성, 주어진 배열에서 테스트를 통과한 요소로 필터링
ex. const result = words.filter((word) => word.includes('a'));

##### 2. Array.prototype.forEach()

각 배열 요소에 대해 함수를 한 번씩 실행
ex. array.forEach((element) => console.log(element));

##### 3. Array.prototype.includes()

배열의 항목에 특정 값이 포함되어 있는지를 판단하여 적절히 boolean 반환

##### 4. Array.prototype.join()

배열의 모든 요소를 지정된 구분 문자열로 구분하여 새 문자열로 만들어 반환
array.join() -> 리스트 그대로 문자열로
array.join('') -> 리스트 내 요소를 그대로 붙여서 반환

##### 4.5 String.split()

문자열을 잘라 배열로 저장
string.split(separator, limit)

```
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

```

##### 5. Array.prototype.map()

배열 내의 모든 요소 각각에 대하여 함수를 호출한 결과를 모아 새로운 배열을 반환
ex. array1.map((x) => x \* 2);
활용도가 상당히 높고 자주 쓰인다.
ex2. 
const s = "1 2 3 4"
s.split(' ').map(Number)

##### 6. Array.prototype.pop(), Array.prototype.push()

##### 7. Array.prototype.reduce()

배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환

1. 문법
   arr.reduce(callback, initialValue);

1. callback: 각 요소에 대해 호출되는 함수로, 네 가지 인자를 받습니다:
1. accumulator (누산기): 이전까지의 누적된 결과입니다.
1. currentValue: 현재 처리 중인 배열의 요소입니다.
1. currentIndex (선택적): 현재 처리 중인 요소의 인덱스입니다.
1. array (선택적): reduce가 호출된 배열입니다.
1. initialValue: 선택 사항으로, 누산을 시작할 때 사용할 초기값입니다. 생략하면 배열의 첫 번째 요소가 초기값이 됩니다.

ex.2 배열의 요소들을 연결

```
const words = ['Hello', 'world', '!'];

const sentence = words.reduce((accumulator, currentValue) => {
  return accumulator + ' ' + currentValue;
});

console.log(sentence); // 출력: "Hello world !"
```

ex.3 배열의 중첩된 배열을 flattening

```
const nestedArrays = [[1, 2], [3, 4], [5, 6]];

const flatArray = nestedArrays.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);

console.log(flatArray); // 출력: [1, 2, 3, 4, 5, 6]
```

ex.4 객체 속성의 합 계산

```
const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 700 }
];

const totalPrice = products.reduce((accumulator, product) => {
  return accumulator + product.price;
}, 0);

console.log(totalPrice); // 출력: 2200
```

##### 8. Array.prototype.reverse()

배열의 순서를 반전

##### 9. Array.prototype.slice()

배열의 시작점과 끝점을 지정하여 얕은 복사본을 새로운 배열 객체로 반환한다.

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

##### 10. Array.length

배열 요소 수

##### 11. isNaN()

Not-a-Number
숫자가 아닌 값을 처리하거나, 수학적 연산에서 오류가 발생할 수 있는 경우에 주로 사용한다.
하지만 JS에서는 isNaN이 예상치 못한 결과를 내놓을 수 있어, Number.isNaN을 쓰는것이 바람직하다.

isNaN: 값이 숫자로 변환될 수 없는 경우에 true를 반환합니다. 숫자로 변환할 수 있는 값은 false를 반환합니다. 하지만 숫자로 변환되는 값도 영향을 받아, 예기치 않은 동작이 발생할 수 있습니다.
Number.isNaN: 엄격하게 NaN인 경우에만 true를 반환합니다. 값이 실제로 NaN인지를 판단하는 데 더 안전합니다.
console.log(isNaN(NaN));       // true
console.log(isNaN('Hello'));   // true (문자열을 숫자로 변환하려고 하므로 NaN)
console.log(isNaN(123));       // false
console.log(isNaN('123'));     // false (문자열 '123'은 숫자로 변환 가능)
console.log(isNaN(undefined)); // true (undefined는 NaN으로 변환)
비교 (Number.isNaN()의 경우 실제로 NaN이어야 true를 반환함.)
console.log(Number.isNaN(NaN));         // true
console.log(Number.isNaN('Hello'));     // false (문자열이므로 NaN이 아님)
console.log(Number.isNaN(123));         // false
console.log(Number.isNaN('123'));       // false
console.log(Number.isNaN(undefined));   // false
console.log(Number.isNaN(NaN));         // true
console.log(Number.isNaN(NaN));         // true

##### 12. sort()

기본적으로는 배열의 요소를 문자열로 변환해 사전순으로 정렬한다.
숫자 배열의 오름차순, 내림차순 정리가 가능하다

```
오름차순
const numbers = [40, 100, 1, 5, 25, 10];

numbers.sort((a, b) => a - b);

console.log(numbers); // 출력: [1, 5, 10, 25, 40, 100]

내림차순
const numbers = [40, 100, 1, 5, 25, 10];

numbers.sort((a, b) => b - a);

console.log(numbers); // 출력: [100, 40, 25, 10, 5, 1]
```
