const dataBarang = () => {
  setTimeout(() => {
    console.log('promise');
  },[0])
  console.log('no promise')
  console.log('no promise2')
  setTimeout(() => {
    console.log('promise2');
  },[0])
}
dataBarang()

const datasiswa = new Promise((resolve, reject) => {
if(resolve) {
  setTimeout(() => {
    resolve('siswa1')
  },[1000])
}else {
  reject('data tidak terpanggil')
}})

const cobaPromise = new Promise((resolve) => {
  return resolve('promise tanpa settimout')
})
cobaPromise.then(res => console.log(res))

const eksekusi = async () => {
  try {
    const response = await datasiswa
    if(response > 1000) {
      console.log(response)
    }else {
      throw Error('terjadi kesalahan di reponse')
    }
  } catch (e) {
    console.log(e.message)
  }
}

// OOP
class Person {
  constructor(firstName) {
    this.firstName = firstName
  }

  sayHello(){
    console.log(`hello ${this.firstName}`)
  }
}

const orang = new Person('teguh')
// orang.sayHello()

// OOP HANDLE ERROR

class HandleError extends Error {
  constructor(message){
    super(message)
  }
}

const dataAsy = (on) => {
  return new Promise((resolve, reject) => {
    if(on) {
      resolve('data on')
    }else{
      reject(new HandleError('data off'))
    }
  })
}

const aksi = async () => {
  try {
    const datas = await dataAsy(false)
      console.log(datas)
  } catch (e) {
    console.log(e.message)
  }
}
aksi()

// OOP PERWARISAN
class Bapak {
  constructor(warisan, anakKe, bagian){
    this.warisan = warisan
    this.anakKe = anakKe
    this.bagian = bagian
  }
  tanah() {
    console.log(`${this.anakKe} mendapatkan warisan ${this.warisan} dengan bagian ${this.bagian}`)
  }
}

class AnakPertama extends Bapak {
  constructor(warisan,anakKe, bagian){
    super(warisan,anakKe,bagian)
  }
  tanah() {
    super.tanah()
  }
 
}

class AnakKedua extends AnakPertama {
  constructor(warisan,anakKe, bagian){
    super(warisan,anakKe,bagian)
  }
  tanah() {
    super.tanah()
  }
}

const anak1 = new AnakPertama('tanah',1,'70%')
const anak2 = new AnakPertama('tanah',2,'30%')
anak1.tanah()
anak2.tanah()


