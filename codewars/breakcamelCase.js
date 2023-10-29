// complete the function
function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}

console.log(solution("camelCasing"));
console.log(solution("identifier"));
console.log(solution("camel Casing Casing"));
console.log(solution(""));
