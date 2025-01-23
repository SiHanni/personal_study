자바스크립트에서 값을 입력 받는 방법
python에서 input() 과 같은 메서드가 따로 없는 듯하다.
그래서 직접 파일시스템을 불러와서 사용하나 보다.

const fs = require('fs')

1 2 처럼 숫자 사이 공백이나, "내 이름은 마루" 처럼 문자열 내 공백과 같은 경우 공백을 기준으로 문자를 나누어 값을 저장한다.
그리고 값을 사용할 때는 배열의 인덱스를 이용한다.

const inputData = fs.readFileSync('dev/stdin').toString().split(' ')
inputData[0], inputData[1], inputData[2] 이런 식으로 접근하면 된다.

fs.readFileSync의 경우 buffer 형식으로 return 되기 때문에 toString으로 받아주어야 한다.
그래서 형변환을 다시 해줘야한다;;;;;
parseInt(number, 10) or Number()

/dev/stdin은 **표준 입력(stream)**을 나타내는 특수한 파일입니다.
이 파일은 터미널에서 직접 입력하거나, 파이프(|)를 통해 전달된 데이터를 읽을 수 있게 해줍니다.
