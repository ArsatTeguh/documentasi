const prima = num =>{
let arr = []

for(i = 2; i <= num; i++){
    for ( j = 2; j <= i; j++) {
        if(i !== j && num %  j == 0){
            arr.push(j)
        }   
        
    }
}    

return arr.join('-')
}
// console.log(prima(10))

// var input = document.getElementById('input')
// var input2 = document.getElementById('input2')
// var btn = document.getElementById('btn')
// let hasil = 0

// btn.addEventListener('click',function() {
  

// hasil = parseInt( input.value.replace(/[.,!]/gi, '')) + parseInt( input2.value.replace(/[.,!]/gi, '') )
// console.log(hasil)
// })


    const eksekusi = function (result) {
        let tujuan1 = document.getElementById('tujuan1')
        tujuan1.innerHTML = result
        }

    const Pinjaman = () => {
      
    var harga = document.getElementById('harga').value;
    let tahun = document.getElementById('tahun').value;

    // TOTAL PINJAMAN
    var uangmuka = document.getElementById('uangmuka').value
    parseInt( harga = harga.replace(/[,.!]/gi,""))
    parseInt( uangmuka = uangmuka.replace(/[,.!]/gi,""))
    var input = harga - uangmuka
      
    // TOTAL Angsuran
    let hasil = input / tahun
    let bulat=  Math.floor( hasil)
    let angusran = String(bulat)
    konver(angusran)

    }

   const konver = function (input) {
    // rupiah =====================
    var panjangInput = input.length
    var angkaTersisa = panjangInput % 3;
    var angkaSisa = '';
        if(angkaTersisa == 0){
            angkaSisa=3
        }else{
            angkaSisa=angkaTersisa
        }

    var formatuang = String( input).substr(angkaSisa)
    var panjangformat = formatuang.length / 3; 
    var tigadigit =''

        for(i=0; i < panjangformat;i++){
            tigadigit="." + formatuang.substr(-3) + tigadigit
            var sisanilai = formatuang.length-3;
            formatuang = formatuang.substr(0,sisanilai);
        }

    var hasil = String( input).substr(0,angkaSisa)
    var result = hasil + tigadigit

    eksekusi(result)
    }

 