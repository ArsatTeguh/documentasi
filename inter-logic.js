// soal 1
const test1 = ([...kata]) => {
  const angka = kata.pop();
  const teks = kata.reverse();
  teks.push(angka);
  return teks.join("");
};
console.log(test1("NEGIE1"));

//soal 2
const kalimatTerbanyak = (kata) => {
  let arr = kata.split(" ");
  let indexAwal = arr[0].length;

  for (i = 0; i < arr.length; i++) {
    if (arr[i].length >= indexAwal) {
      indexAwal = arr[i].length;
    }
  }
  let result = "";
  let newarr = kata.split(" ").find((e) => {
    if (e.length >= indexAwal) {
      result += e;
    }
  });
  const data = `${result}: ${result.length} character `;
  return data;
};
console.log(kalimatTerbanyak("Saya sangat senang mengerjakan soal algoritma"));

//soal 3
const perbandingan = () => {
  let INPUT = ["xc", "dz", "bbb", "dz"];
  let QUERY = ["bbb", "ac", "dz"];
  let value = 0;
  let OUPUT = [];
  for (let i = 0; i < QUERY.length; i++) {
    for (let k = 0; k < INPUT.length; k++) {
      if(QUERY[i] === INPUT[k]){
        value += 1
      }
    }
    OUPUT.push(value);
    value = 0
  }
  return OUPUT
};
console.log(perbandingan());

//soal 4
const matrix = () => {
  const Matrix = [
  [1, 2, 0], 
  [4, 5, 6],
  [7, 8, 9]
  ]
  let diagonal1 = 0
  let diagona2 = 0
  let result;
  const PM = Matrix.length
  for(let i = 0; i < PM; i++){
    for(let k = 0; k < PM; k++){
      if(i == k){
        diagonal1 += Matrix[i][k]
      }
      if((i + k) == (PM -1)){
        diagona2 += Matrix[i][k]
      }
    }
  }
 return result = diagonal1 - diagona2
 
}
console.log(matrix())