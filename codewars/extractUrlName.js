// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

function domainName(url) {
  let result = "";
  const realUrl = url.match(/[\w|\-]+/gi);
  for (let i = 0; i < realUrl.length; i++) {
    if(realUrl[i] !== "http" && realUrl[i] !== "https" && realUrl[i] !== "www") {
      result += realUrl[i];
      break;
    }
  }
  return result;
}

console.log(domainName("http://github.com/carbonfive/raygun")); // "github"
console.log(domainName("http://www.zombie-bites.com")); // "zombie-bites"
console.log(domainName("https://www.cnet.com")); // "cnet"
console.log(domainName("https://www.youtube.com/watch?v=9RksQ5YT7FM")); // "youtube"

