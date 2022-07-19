const variabel = (e)=>{
    return `hallo ${e} apakabar`
}

// console.log(variabel("teguh"))




function TinggiBadan(a,b,c) {
    let count = ""
    if (count == a) {
        count += "anda tertinggi terakhir"
    } else if (count == b) {
        count +=  "anda tertinggi ke 2"
    } else {
        count += "anda tertinggi pertama"
    }
    return count;
}
// console.log(TinggiBadan(1,2,3))

const perkusi = num => {
    let arr = []
    if(num == 0) {
        return
    }
    arr = arr.push(num + 1)
   

}
// console.log(perkusi(5))

const solution = number =>{
    let arr =[]
    for (let i = 1; i <= number; i++){
        
        if(i % 3 == 0){
            arr.push(i)    
        }

        
        
    }
    return arr
}

// console.log(solution(23))

const bilanganTerbesar = (num)=> {
    let besar = []

    
    for (i = 1; i <= num; i++){
        
        if(i <= num / 2 && i < 2){
        besar.push(i) 
        }else if( i >= num){
         besar.push(i)
      
       }else if(i == num / 2)
       besar.push(i)
      
    }
return besar.join('\n')
    
}
// console.log(bilanganTerbesar(300))


const hilangSimbol = kata => {
    // replace dahulu simbolnya dari kata
   let hapus = kata.replace(/[!]+$/gi,"")
    return hapus
}

// console.log(hilangSimbol('!!!!!!!ayo!!'))


const tumpuksimbol = kata => {
    // let tumpukan = []
    // let kalimat = ''
    // for(i = 0; i < kata.length; i++){
    //     if(kata[i] == '!'){
    //     tumpukan.push(kata[i])
    //     }else{
    //         kalimat += kata[i]
    //     }
    // }
    
//    return (kalimat + tumpukan.join(''))

    return kata.replace(/[\]/g,'') + kata.replace(/[^!]/g,'')
}
console.log(tumpuksimbol("!hallo!!"))


const balikKata = kata => {
    let newkata = [...kata]
    
    // for(i=newkata.length; i>=0; i--){
    //      console.log(newkata[i])
    // }
    return newkata.reverse().join('-')
}
// console.log(balikKata("teguh"))

const openBracket = data => {
    let kata = [...data]
    let result =  0;
    for(i=0; i < kata.length; i++){
     if(kata[i] === "{"){
         result += 1
     }else {
         result -= 1
     }
    }
    if(result < 0){
        return false
    }else{
        return true
    }
}
// console.log(openBracket("{}}}"))

const factorNumber = kata => {
    for(i = 1; i <= kata; i++){
       if(kata % i === 0){
           console.log(i)
       }
    }
}

// console.log(factorNumber(15))


const factorial = num => {
    let result = 1
    for(i = num; i >= 1; i--){
    result = result * i
    }
    return result
}
console.log (factorial(4))

// const duplicat = kata => {
//    kata.split(' ').
//    kata.filter((word,index,arr) => {
//        console.log(word)
//    })
// }

// console.log(duplicat("hallo teguh hallo teguh"))

const aritmatikaArray = num => {
    let hasil = 0
        for(i = 0; i < num.length; i++){
         hasil += num[i]
        }
        return hasil
}
console.log(aritmatikaArray([1 ,2 ,3 ,4 ,10 ,11]))

const perbandigan = (a,b) =>{
    let alice = 0
    let bob = 0
    for(i = 0; i < a.length; i++){
        if(a[i] > b[i]){
            alice += 1
        }else if(a[i] < b[i]){
            bob += 1
        }else {
            alice += 0
            bob += 0
        }
    }
    return ([alice,bob]).join()
}

console.log(perbandigan([10,1,1],[1,1,10]))

const jumlahBit = bit => {
    let hasil = 0
    for(i = 0; i < bit.length; i++){
        hasil += bit[i]
    }
    return hasil
}
console.log(jumlahBit([1000000001,1000000002,1000000003,1000000004,1000000005]))

const diagonalArr = (num1,num2,num3) => {
    let hasilKiri = 0
    let hasilKanan = 0

    hasilKiri = num1[0] + num2[1] + num3[2]
    hasilKanan = num1[2] + num2[1] + num3[0]
    console.log(hasilKiri - hasilKanan)
}

diagonalArr([1,2,3],[4,5,6],[7,8,9])  

const simbol = (str) =>{
console.log(str)
}

const skor = (value) =>{
    let hasil = 0
 value.map(skors => {
     if(skors[0] > skors[2]){
         hasil += 3
     }else if(skors[0] === skors[2]){
         hasil += 1
     }
 })
 return hasil
}

// console.log(skor(['1:2','2:2','2:3']))

const deletestring = (str) =>{

    return str.slice(1,-1)
}
// console.log(deletestring('aku adalah palaut'))


function scoreChecker(score) {
    let result;
  
    // TODO
  if(score < 60){
      result = 'Anda mendapatkan nilai E.';
      }else if(score < 70){
      result = 'Anda mendapatkan nilai D.';

      }else if(score < 80 || score == 70){
      result = 'Anda mendapatkan nilai C.';
      }else if(score < 90 || score == 80){
      result = 'Anda mendapatkan nilai B.';
      }else if(score >= 90){
          result = 'Selamat! Anda mendapatkan nilai A'
      };
  
  
  
    // Jangan hapus kode ini
    return result;
  }
  console.log(scoreChecker(99999))


  // mencari data pada array
  const arr = ['kopi hitam', 'kopi susu', 'susu','jamur', 'teh manis dingin', 'luwak kopi'];

  const newArr = [...arr]

 const teguh = newArr.filter((data) => {
      const nama = 'kopi';
      return (
          data.includes(nama)
      );
  })
  console.log(teguh.join(' - '))


  const insertedAt = new Date().toISOString();
  console.log(insertedAt
    )

    // ====== PEMAHAMAN THIS PADA OOP ========= //
    class Game {
        constructor(name) {
            this._name = name;  
            this.loadingStuf = this.loadingStuf.bind(this);
        }

        loadingStuf() {
            console.log('Membuat komponen permainan');
            console.log(`Permainan ${this._name} akan segera dimulai`);
            console.log(this)
        }
    };

    //function handler. menangani setiap permintan pada client
    const gamePlayer = (game) => ({
       play : game.loadingStuf         // Mengemeblaikan nilai dari method loading.
    });                                

    //function instance. berfungsi menangani setiap eksekusi
    const runner = () => {
        const game = new Game('Catur'); // inisialisasi class Game 
        gamePlayer(game).play();        // memasukan value ke class. serta memanggil function handler,
    }                                   // sekaligus object play sekarang sudah memiliki value

    runner()