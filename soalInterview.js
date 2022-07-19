// FizzBuzz
const fizzbuz = num =>{
    for(i = 1; i<=num; i++){
        if(i % 3 == 0 && i % 5 == 0) {
            console.log('fizzbuzz')
        }else if(i % 3 == 0){
            console.log('fizz')
        }else if(i % 5 == 0){
            console.log('buzz')
        }else{
            console.log(i)
        }
    }
}

console.log(fizzbuz(20))

// bilangan fibonaci
const fibonaci = num => {
    let fn = 1
    let fn1 = 0
    let fn2 = 1
    let wadah = []

    for(i = 0; i< num;i++){
        wadah.push(`${fn}`)
        fn2 = fn1;
        fn1 = fn;
        fn = fn2 + fn1
    }

    return wadah.join('\n')
}

console.log(fibonaci(10))

// bintang

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
  console.log(bintang(6))

  const bintang2 = num => {
      let arr = ''

      for(i = 0; i < num; i++){
          for(j = 0; j < i ; j ++){
              arr += '*'
          }
          arr += '\n'
      }
      return arr
  }

  console.log(bintang2(6))

  const bintang3 = num => {
      let arr = ''

      for(i = 0; i < num; i++){
          for(j = num; j > i; j--){
              arr += '*'
          }
          arr += '\n'
      }
      return arr
  }

  console.log(bintang3(6))


//   bilangan prima 

const prima = num =>{
    let number = []
    
    for(i = 1; i <= num; i++){
        if(num % i == 0){
            number.push(i)
        }else if(number == 2){
            console.log(`ini bukan bilangan prima`)
        }
    }    
        return number
 
    }
    console.log(prima(10))