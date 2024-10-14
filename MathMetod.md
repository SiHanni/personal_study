에서 Math 객체는 다양한 수학적 연산을 수행할 수 있는 메서드와 상수를 제공합니다. Math는 전역 객체로, 별도의 인스턴스를 생성하지 않고도 바로 사용할 수 있습니다.

자주 사용되는 Math 메서드

1. Math.abs()
   Math.abs(x): 주어진 숫자의 절대값을 반환합니다.
   console.log(Math.abs(-5)); // 출력: 5

2. Math.ceil()
   Math.ceil(x): 주어진 숫자를 올림하여 가장 큰 정수로 반환합니다.
   console.log(Math.ceil(4.2)); // 출력: 5

3. Math.floor()
   Math.floor(x): 주어진 숫자를 내림하여 가장 작은 정수로 반환합니다.
   console.log(Math.floor(4.8)); // 출력: 4

4. Math.round()
   Math.round(x): 주어진 숫자를 반올림하여 가장 가까운 정수로 반환합니다.
   console.log(Math.round(4.5)); // 출력: 5
   console.log(Math.round(4.4)); // 출력: 4

5. Math.max()
   Math.max(...values): 주어진 숫자 중에서 가장 큰 값을 반환합니다.
   console.log(Math.max(1, 3, 2)); // 출력: 3

6. Math.min()
   Math.min(...values): 주어진 숫자 중에서 가장 작은 값을 반환합니다.
   console.log(Math.min(1, 3, 2)); // 출력: 1

7. Math.pow()
   Math.pow(base, exponent): 주어진 숫자를 거듭제곱한 값을 반환합니다. (base^exponent)
   console.log(Math.pow(2, 3)); // 출력: 8 (2^3)

8. Math.sqrt()
   Math.sqrt(x): 주어진 숫자의 제곱근을 반환합니다.
   console.log(Math.sqrt(16)); // 출력: 4

9. Math.random()
   Math.random(): 0 이상 1 미만의 난수를 반환합니다.
   console.log(Math.random()); // 출력: 0부터 1 사이의 임의의 값

10. Math.trunc()
    Math.trunc(x): 주어진 숫자의 소수점을 제거하고 정수 부분만 반환합니다.
    console.log(Math.trunc(4.9)); // 출력: 4
