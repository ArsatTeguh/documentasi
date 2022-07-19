// No 1
// Saya akan mengikuti apapun yang bos perintahkan kepada saya

// No 2 
class Worker {
  constructor(hoursWorked, rate, tax){
    this.hoursWorked = hoursWorked
    this.rate = rate
    this.TAX = tax
  }

  basicSalary(){
    return this.hoursWorked * this.rate;
  }

  overViewSalary(){
    return this.basicSalary() + this.TAX;
  }
}
const kerja = new Worker(12,10000,1)
console.log(kerja.basicSalary());


//jika tidak error returnnya Run4Err
// jika error returnnya Run3Err
function handleError() {
  let error 
  if(OK(Run1())) return error = RunErr1
  if(OK(Run2())) return error = RunErr2
  if(OK(Run3())) return error = RunErr3
  if(OK(Run4())) return error = RunErr4
  return error
}

//No 4 