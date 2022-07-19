// balikan nama palindrom dengan menggunakan perulangan decrement
// for(let i = value.length - 1; i  >= 0; i--)

// buat variabel yang menampung data teks asli dan teks kebalik
// let awal = value[i];
// let akhir = value.length - i - 1;

// tambahkan method charAt agar kata terbalik mengambil isi teksnya bukan angka indexnya lalu bugkus variabel kata akhirnya dengan metode charAt
// value.charAt(akhir)

// buat logika yang membandingkan index awal dan akhir 
// if(awal !== value.charAt(akhir)){
//     console.log(`kata ${value} !!! bukan palindrom`)
// }else{
//     console.log(`kata ${value}  adalah palindrom`)
// }
// return value;

const palindrom = (content) =>{
    // let value = content.split('').join('')
    let isi = []
   
    for(let i = content.length - 1; i  >= 0; i--){
        
        let awal = i;
        let akhir = content.length - i - 1;
        // console.log(`${value.charAt(awal)} : ${value.charAt(akhir)}`)

        if(content.charAt(awal) !== content.charAt(akhir)){
        isi.push(`${content} tidak palindrom`)

        }else{
           isi.push(content + ' ini kata palindrom')
        }
    return isi.join('')
    }
  
}
console.log(palindrom("kimak"))

