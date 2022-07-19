const fizbuz = num => {
    const arr = []

    for(i = 0 ; i < 100; i++){
      arr.push(i) 
        if(arr[i] % 3 == 0 && i % 8 == 0){
            console.log('fizbus')
        }else if (arr[i] % 3 == 0){
            console.log('fiz')
        }else if(arr[i] % 8 == 0){
            console.log('bus')
        }else if (i !== 0){
            console.log(arr[i])
        }

    }
}
  

// console.log(fizbuz())

const modulus7 = () =>{
    for(i = 0; i < 100; i++){
       console.log(i)
    }
}
modulus7()