// 성격 유형 검사하기

// 처음 지표를 어떤 자료형으로 저장 및 관리할지에 시간을 대부분 사용함.

function solution(survey, choices) {
  const character = [
    { R: 0, T: 0 },
    { C: 0, F: 0 },
    { J: 0, M: 0 },
    { A: 0, N: 0 },
  ];
  const scores = [3, 2, 1, 0, 1, 2, 3];
  for (let i = 0; i < survey.length; i++) {
    let char = survey[i].split('');
    if (choices[i] < 4) {
      const choice = char[0];
      const score = scores[choices[i] - 1];
      for (let i = 0; i < character.length; i++) {
        if (choice in character[i]) {
          character[i][choice] += score;
        }
      }
    } else if (choices[i] > 4) {
      const choice = char[1];
      const score = scores[choices[i] - 1];
      for (let i = 0; i < character.length; i++) {
        if (choice in character[i]) {
          character[i][choice] += score;
        }
      }
    }
  }
  let result = '';
  character.forEach(item => {
    const keys = Object.keys(item);
    const [key1, key2] = keys;

    const value1 = item[key1];
    const value2 = item[key2];

    if (value1 > value2) {
      result += key1;
    } else if (value1 < value2) {
      result += key2;
    } else {
      result += key1 < key2 ? key1 : key2;
    }
  });
  return result;
}

// character을 다시 반복해서 점수를 올린다는 점이 마음에 들지 않긴함.

// gpt를 통한 개선

function solution(survey, choices) {
  const characterScore = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  const scores = [3, 2, 1, 0, 1, 2, 3];

  for (let i = 0; i < survey.length; i++) {
    const char = survey[i].split('');
    const score = scores[choices[i] - 1];

    if (choices[i] < 4) {
      characterScore[char[0]] += score;
    } else if (choices[i] > 4) {
      characterScore[char[1]] += score;
    }
  }
  let result = '';

  const types = [
    ['R', 'T'],
    ['C', 'F'],
    ['J', 'M'],
    ['A', 'N'],
  ];
  for (const [type1, type2] of types) {
    if (characterScore[type1] > characterScore[type2]) {
      result += type1;
    } else if (characterScore[type1] < characterScore[type2]) {
      result += type2;
    } else {
      result += type1 < type2 ? type1 : type2;
    }
  }
  return result;
}

// 배운점은 굳이 관리를 하나로 안해도 되겠다.