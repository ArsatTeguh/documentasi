const bintang = num => {
  let arr= ''
    for(i = 0; i < num; i++){
      for(j = num; j > i ; j--){
         arr += " "
      }

      for(k = 0; k <= i ; k++ ){
        arr += '*'
      } 
      arr += '\n'

    }
    return arr
}
// console.log(bintang(6 ))


//  hasil bilangan pangkat
function squareSum(numbers){
    var sum = 0;
    numbers.forEach(function(n) {
      sum = sum +  n * 2
    });
    return sum;
  }
  // console.log(squareSum([1,2,2]))
//  tanda += untuk menambahkan semua isi dari index array



// MENETUKAN KALIMAT TERPENDEK DARI SETIAP KALIMAT !!!
const findShort = kata => {
  // --------kita cari dulu jumlah kalimat pertama, lalu pecah kalimat tersebut simpan kedalam array
  // split disini kita panggil untuk memecahkan kalimat yang dikirimkan dari parameter untuk dibuat ke array 
  let arr = kata.split(' ');

  // lalu kita ambil berapa jumlah huruf pertama dari hasil array yang barusan kita buat, untuk kita bandikan nantinya dengan kalimat berikutnya
  // arr[0] adalah kita ingin ambil jumlah kata dari index pertama untuk kita bandingkan
  let min = arr[0].length;
  
  // panggil arr.length dalam perulangan agar kita bandingkan berapa total pangjang kata yang kita kirimkan dari parameter
  for (i = 1; i  < arr.length; i++){
    // panggil arr[i] .length karna kita ingin tahu berapa total huruf didalam setiap kalimat yang ada di array per index disini ada 5 index jadi 
    // keluarkan angka kalimat disetiap index
    // perlu diingat panggil arr[i].length karna kalau hanya panggil arr[i] berarti yang keluar isi kalimatnya bukan total berapa kalimatnya per index
    if(arr[i].length < min){
      min = arr[i].length
    }
  }
  return min
}
// console.log(findShort('aku adalah anak pertama lo'))


const penjumlahan = angka => {
  // urutkan dulu isi arraynya dari terkecil ke terbesar
  let urutan = angka.sort((a,b) => {return a - b})

  // buang angka terkeceil dan terbesar dalam array nya
  let irisan = urutan.slice(1,-1)
  let hasil = 0

  for (i = 0; i < irisan.length; i ++){

    // tambhakan array yang sudah dipashkan
    hasil += irisan[i]
  }
return hasil
}
// console.log(penjumlahan([ 6, 2, 1, 8, 10]))


// Balik Kata
const balikKata = kata => {
  let hasil = [...kata]
  hasil.reverse()

  return hasil
}
// console.log(balikKata("monyet"))


// MENCARI DAN MENAMPILKAN KATA TERBANYAK 
const kalimatTerbanyak = kata => {
  let arr = kata.split(' ');
  let indexAwal = arr[0].length;

  for(i = 0; i < arr.length; i++){
   
    if(arr[i].length >= indexAwal){
     indexAwal = arr[i].length
  }
}
  let result = '';
  let newarr = kata.split(' ').find(e => {
    if(e.length >= indexAwal){
    result += (e)
    }
  })
  return result

}
const kalimatTerbesar = (kata) =>{
  return kata.split(' ').find(e => e.length > 10)
}
// console.log(kalimatTerbesar('aku adalah si penggembala sapi'))
// console.log(kalimatTerbanyak('aku adalah seorang programer'))



// MENGHAPUS KATA DALAM SEBUAH KALIMAT
function disemvowel(str) {
  return str.replace(/[aiueon]/gi, '');
}
// console.log(disemvowel('hALO Kontol MAMAK KELEN'));

const ubahperkata = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  let newStr = '';

  for (let i = 0; i <= str.length; i++) {
    // console.log(str[i])

    let char = str.charAt(i);
    if (vowels.indexOf(char) == -1) {
      newStr += char;
    }
  }
    return newStr;

};

// console.log(ubahperkata("PEPEK MAMAK KELEN"));


// const HurufBesarPertama = kata =>{
//   let pecahan1 = kata.toLowerCase().split(' ')
//   let pecahan2 = pecahan1.map(e => [e[0],e.slice(1)])
//   let hasil2 = pecahan2.map(e => [e[0].toUpperCase(), e[1]])
//   let result = hasil2.map(e => [e[0] + e[1]]).join(" ")
//   const hasil = result.replace(/[_-]/gi," ")
//   let arr = [...hasil]
//   let hasil3 = arr.map(e => [e[0].toUpperCase(), e[1]])


//  return hasil3;
// }
// console.log(HurufBesarPertama("HALLO_my_name_is_arsad"))

const changeteks = kata => {

// hilangkan teks yang bertuliskan _ - ganti dengan spasi
let hilangteks = kata.replace(/[-_]/gi, " ")

// ubah teks kedalam array serta ubah kata menjadi huruf kecil semua
let arr = hilangteks.toLowerCase().split(" ")

// pisahkan kata pertama lalu ubah menjadi huruf besar, lalu gabungkan dengan kata pertama - berikutnya dengan tanda tambah, lalu ubah array ke string
let ubahteks = arr.map(e =>{
  return [e[0].toUpperCase() + e.slice(1)]
}).join("")
return ubahteks
}

// console.log(changeteks("hAllo_naMa_saYa_Teguh"))

var data = [
  {name: 'Joe', age: 20},
  {name: 'Bill', age: 30},
  {name: 'Kate', age: 23}
]
function arr (data) {
  return data.map(e => e.name)
}
// console.log(arr(data))


// buatla sebuah function yang menerima parameter sebuah array
const hasilkuadrat = (array1,array2) => {

  // buatlah sebuah variabel kosong  yang akan diisi dari  hasil perkalian dari array parameter
  array2 = [14641, 20736, 361, 25921, 361, 20736, 361];
  let result = true;
  // array2.push(Math.sqrt(array1[0])* Math.sqrt(array1[0]))
// logikannya kali kan value dengan dirinya sendiri dan hasilnya akan di simpan kedalam variabel yang sudah dibuat

  
    array1.map((a) => {
      if(a * a == array2){
         result =true
      }else{
        
      result = false
      }
    })
    console.log(array2)

    // if(array1 !== null && array2 !== null){
    //   array2.push(array1[i] * array1[i])
    // }else{
    //   array2.push("false")
    // }
 

  return result
}
// console.log(hasilkuadrat([121, 144, 19, 161, 19, 144, 19, 11]  ))


function dontGiveMeFive(start, end){
  let angka = []
  for(i = start; i <= end; i++){
    if(i !== 5 && i !== 15){
      angka .push(i) 
    }
  }
  // angka.join(' ');
  return angka
}
console.log(dontGiveMeFive(1,9))