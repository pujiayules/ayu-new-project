// Variable
// var, let, const
// var 
// Var = global scope
// Let = block scope
// var name = "randy"
// var name = "jon"
// console.log(name)

// let name = "randy"
// let name = "jon"
// console.log(name) 

// 
// let nilai = 10
// nilai = 20
// console.log(nilai)

// konstanta
// const nilai = 10
// nilai = 20
// console.log(nilai)

// typeof = untuk mengetahui tipe data
// let name = "randy"
// let nilai = 10
// let nilai2 = "80"
// let sudahMakan = true
// let people = {
//   name: "randy",
//   umur: 20
// }
// let colors = [1, 2, 3]
// let hello = function () {
//   console.log("helo")
// }
// console.log(typeof name)
// console.log(typeof nilai)
// console.log(typeof nilai2)
// console.log(typeof sudahMakan)
// console.log(typeof people)
// console.log(typeof colors)
// console.log(typeof hello)

// comparasion
// console.log(1 == 1)
// console.log(2 != 1)
// console.log(3 < 1)
// console.log(3 <= 3)

// // aritmatika
// console.log(1 + 1)
// console.log(2 - 1)
// console.log(2 * 5)
// console.log(5 / 10)

// // logical
// let people = {
//   name: "randy",
//   umur: 20
// }

// if (people.umur > 10 || people.name == "jon") {
//   console.log("benar")
// }

// == / === 
// === dicheck sampe tipe datanya
// console.log(1 === "1")
// console.log(1 == "1")

// Mini quiz 1
// let x;
// console.log(x)


// a. undefined
// b. null
// c. x

// Mini Quiz 2

// let nilai1 = 10
// console.log(nilai1)
// nilai1 = 20
// console.log(nilai1)

// // a. 10, 20
// // b. 10, 10
// // c. 20, 20

// Mini Quiz 3

// const x = "10"
// const y = 10
// console.info(x === y)

// perulangan
// while
// cetak hello world sebanyak 10x
// let n = 1
// while (n <= 5) {
//   console.log('Hello World')
//   n++
// }

// 0 < 10 true
// 1 < 10 true

// for
// for (let n = 0; n < 10; n++) {
//   console.log('Hello World')
// }

// 
// const peoples = ['john', 'mikael', 'yusuf']
// for (let n = 0; n < peoples.length; n++) {
//   console.log('Hello', peoples[n])
// }

// conditional
// if (kondisi1) {

// } else if (kondisi2) {

// } else {

// }
// const nilai = 50
// if (nilai > 60) {
//   console.log('Anda lulus')
// } else {
//   console.log('Tidak Lulus')
// }
// say_hello, say_hi, hello
// const aksi = 'hi'
// if (aksi === 'say_hello') {
//   console.log('Hello Say Hello')
// } else if (aksi === 'say_hi') {
//   console.log('Hello Say Hi')
// } else {
//   console.log('Hello')
// }

// switch (aksi) {
//   case kondisi1:
//     aksi kondisi tersebut
//     break;
//   case kondisi2:
//     aksi kondisi2 tersebut
//     break;
//   default:
//     aksi default
// }

// const aksi = 'hello'
// switch (aksi) {
//   case "say_hello":
//     console.log('Hello Say Hello')
//     break;
//   case "say_hi":
//     console.log('Hello Say Hi')
//     break;
//   default:
//     console.log('Hello')
// }
// const nilai = 80
// if (nilai > 60) {
//   change background text warna hijau
// } {
//   change background text warna merah
// }
// console.log('')

// function tanpa parameter
// function hello() {
//   console.log('Hello')
// }
// hello()

// function declaration
// function dengan parameter = max 3 parameter
// parameter
// argument
// function hi(nama = 'name') {
//   // console.log('Hello ', nama)
//   return 'Hello ' + nama
// }
// const helloGuys = hi(undefined)
// console.log(helloGuys)

// // 0, 1 ~
// const peoples = ['jon', 'yusuf', 'randy']
// function getName(peoples, urutan) {
//   console.log('Hello', peoples[urutan])
// }

// getName(peoples, 1)
// getName(peoples, 2)

// function expression
// const sayHello = function () {
//   console.log('Hello')
// }

// function hello() {
//   console.log('panggil function dalam function')
//   sayHello()
//   return 'hello 2'
// }

// const sayHello2 = hello()

// console.log(sayHello2)

// sayHello()

// Mini Quiz 
// function add(a, b) {
//   return a + b
// }
// let sum = add(3, 10)
// console.log(sum)

// // Mini Quiz
// console.log(add(1, "5"))

// array
// empty array
// const empty = []
// console.log(empty)
// // 
// // index 0 dan seterusnya
// const numbers = [10, 20, 30, 40, 50]
// console.log(numbers.length)
// // 5 - 1
// // 5 - 2 = 3
// console.log(numbers[numbers.length - 2])

// menambahkan array
// const numbers = [10, 20]
// // 30
// // nambah dari belakang
// // numbers.push(100)
// // numbers.push(200)
// // nambah dari depan
// numbers.unshift(5)
// numbers.unshift(8)
// console.log(numbers)
// nambahin sesuai kemauankita
// const numbers = [10, 20, 30]
// numbers.splice(1, 0, 15)
// numbers.splice(3, 0, 25)
// console.log(numbers)

// const numbers = [10, 20, 30, 40]
// // hapus dari index terakhir
// // numbers.pop()
// // numbers.pop()
// // hapus dari depan
// numbers.shift()
// console.log(numbers)
// hapus spesifik berdasarkan index
// const numbers = [10, 20, 30, 40]
// numbers.splice(1, 3)
// console.log(numbers)

// ubah isi array
// const numbers = [10, 20, 30, 40]
// numbers.splice(0, 1, 100)
// numbers.splice(1, 1, 200)
// console.log(numbers)

// for (let index in numbers) {
//   console.log(numbers[index])
// }

// mencari data array
// const kota = ['Bandung', 'Surabaya', 'Jakarta']
// console.log(kota)
// console.log(kota[1])
// console.log(kota.indexOf('Surabaya'))
// console.log(kota.includes('Malang'))

// object
// key dan value
// const person = {
//   name: 'John',
//   age: 30
// }

// person.name = 'Yusuf'
// person['age'] = '20 tahun'
// person.profesi = 'Programmer'
// console.log(person)
// console.log(person.name)
// console.log(person['age'])

// for (let index in person) {
//   console.log(person[index])
// }

// const person = {
//   name: 'John',
//   age: 30,
//   greet: function () {
//     console.log('Hallo')
//   },
//   hoby: ['makan', 'belanja']
// }
// person.greet()
// console.log(person.hoby)

// function yukKenalan() {
//   const kenalan = 'hallo nama saya ' + person.name +
//     ' umur saya ' + person.age + ' hobi saya ' + person.hoby 
  
//   return kenalan
// }
// const kenalandong = yukKenalan()
// console.log(kenalandong)

// function yukKenalan2(person) {
//   const kenalan = 'hallo nama saya ' + person.name +
//     ' umur saya ' + person.age + ' hobi saya ' + person.hoby 
  
//   return kenalan
// }


// const person2 = {
//   name: 'Sarah',
//   age: 25,
//   greet: function () {
//     console.log('Hallo')
//   },
//   hoby: ['belanja']
// }

// const orang1 = yukKenalan2(person)
// const orang2 = yukKenalan2(person2)
// console.log(orang1)
// console.log(orang2)

// 
// const person = {
//   name: 'John',
//   age: 30,
//   greet: function () {
//     console.log('Hallo')
//   },
//   hoby: ['makan', 'belanja'