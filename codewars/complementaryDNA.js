// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

function DNAStrand(dna) {
  const validDNA = { A: "T", T: "A", C: "G", G: "C" };
  let myDNA = "";
  for (let i = 0; i < dna.length; i++) {
    if (validDNA[dna[i]]) {
      myDNA += validDNA[dna[i]];
    } else {
      return false;
    }
  }
  return myDNA;
}

console.log(DNAStrand("ATkG"));
console.log(DNAStrand("AATTTCG"));
