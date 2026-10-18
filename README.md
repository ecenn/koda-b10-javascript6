# Notes: Built-In Methods and Functions

## Built-In Methods

### Array

#### concat()
menggabungkan 2 atau lebih array menjadi array baru
```js
const array1 = [100, 101]
const array2 = [207, 208]
const array3 = ["a", "b"]
const array4 = array1.concat(array2, array3);
console.log(array4)     // output: [100, 101, 201, 202, 'a', 'b']
```

#### fill()
mengubah elemen didalam array dengan jarak yang ditentukan dengan nilai elemen yang sama
```js
const array = [1, 2, 3, 4, 5, 6]
console.log(array.fill(0, 2, 4))    // output: [1, 2, 0, 0, 5, 6]
console.log(array.fill(5, 1))       // output: [1, 5, 5, 5, 5, 5]
console.log(array.fill(6));         // output: [6, 6, 6, 6, 6, 6]
```

#### filter()
membuat salinan dari suatu array yang kemudian disaring/di-filter dengan sebuah kondisi tertentu
```js
const scores = [90, 80, 40, 50, 85]
const passed = scores.filter((score) => score > 75)
console.log(passed)     // output: [90, 80, 85]
```

#### map()
membuat salinan dari suatu array yang kemudian mengubah semua nilai elemennya dengan kondisi yang diberikan
```js
const angka = [1, 4, 9, 16]
const mapped = angka.map((x) => x * 2)
console.log(mapped)     // output: Array [2, 8, 18, 32]
```

#### some()
mengembalikan nilai boolean ketika dijalankan, apabila memenuhi syarat fungsi menghasilkan true, dan false jika sebaliknya
```js
const bilangan = [1, 2, 3, 4, 5];
const genap = (element) => element % 2 === 0;
console.log(array.some(genap))      // output: true
```

### Number

#### isFinite()
Untuk mengecek apakah Number yang di input adalah angka yang terbatas (finite number) atau bukan (Infinity, -Infinity, NaN)
```js
console.log(Number.isFinite(1 / 0))     // output: false
console.log(Number.isFinite(10 * 5))    // output: true
console.log(Number.isFinite(0 / 0))     // output: false
```

#### isInteger()
Untuk mengecek apakah Number yang di input adalah integer atau bukan
```js
console.log(Number.isInteger(2))        // output: true
console.log(Number.isInteger(2.5))      // output: false
```

#### parseInt()
Mengurai string menjadi sebuah integer dengan basis matematikanya (desimal: 10, binary: 2)
```js
Number.parseInt("  42  ", 10)   // output: 42
Number.parseInt("42px", 10)     // output: 42
Number.parseInt("abc123", 10)   // output: NaN
Number.parseInt("3.14", 10)     // output: 3
Number.parseInt("101", 2)       // output: 5
```

#### toFixed()
Mengembalikan nilai dalam bentuk string sebuah angka dengan jumlah angka di belakang koma yang di atur dalam input parameternya
```js
const num = 123.4567
num.toFixed()     // output: '123'
num.toFixed(2)    // output: '123.45'
```

#### toString()
Mengembalikan nilai Number menjadi nilai string, dan input parameter menjadi basis matematikanya
```js
console.log((20).toString())    // "20"
console.log((17.2).toString())  // "17.2"
console.log((6).toString(2))    // "110"
```

### String

#### repeat()
Mengembalikan gabungan string yang diulang sesuai dengan angka di input paramaternya
```js
console.log("* ".repeat(3))     // output: "* * * "
```

#### slice()
Mengambil sebuah bagian dari sebuah string dan mengembalikan menjadi string baru, dengan input parameter sebagai indeks awal dan sebelum indeks akhirnya
```js
const kalimat = "Kemarin ada mobil mencurigakan di depan pintu."
console.log(kalimat.slice(0, 7))    // output: "Kemarin"" ada mobil mencurigakan di depan pintu."
console.log(kalimat.slice(7))       // output: " ada mobil mencurigakan di depan pintu."
console.log(kalimat.slice(-3))      // output: "tu."
```

#### split()
Mengembalikan sebuah list (dalam bentuk array) setelah sebuah string dipisahkan dengan pola yang di input pada parameter
```js
console.log("Ini Budi.".split(" "))     // output: ["Ini", "Budi."]
console.log("Ini-ibu-Budi.".split("-")) // output: ["Ini", "ibu", "Budi."]
```

#### toUpperCase()
Mengembalikan string baru setelah diubah menjadi huruf kapital
```js
const sentence = "Balonku ada lima."
console.log(sentence.toUpperCase())     // output: "BALONKU ADA LIMA."
```

#### trim()
Mengembalikan string baru setelah dibuang kedua ruang kosongnya (ujung awal dan ujung akhir)
```js
console.log(greeting.trim("   Hello world!   ")) // output: "Hello world!";
```

### Math

#### Math.abs()
Mengembalikan nilai absolut dari sebuah angka
```js
console.log(Math.abs(1-12))     // output: 11
console.log(Math.abs(1.2-7.9))  // output: 6.7
```

#### Math.round()
Mengembalikan nilai dari angka yang sudah dibulatkan mendekati nilai integernya
```js
console.log(Math.round(1.49))   // output: 1
console.log(Math.round(5.5))    // output: 6
console.log(Math.round(-5.05))  // output: -5
```

#### Math.max()
Mengembalikan nilai maksimal dari input parameternya, atau mengembalikan -Infinity jika tidak ada parameter
```js
const array = [-1, -2, -3]
console.log(Math.max(...array)) // output: -1
console.log(Math.max(1, 2, 3))  // output: 3
console.log(Math.max())         // output: -Infinity
```

#### Math.min()
Mengembalikan nilai minimal dari input parameternya, atau mengembalikan Infinity jika tidak ada parameter
```js
const array = [2, 3, 1];
console.log(Math.min(...array))     // output: 1
console.log(Math.min(-2, -3, -1))   // output: -3
console.log(Math.min())             // output: Infinity
```

#### Math.pow()
Mengembalikan nilai dari angka yang dipangkatkan dengan nilai pangkatnya
```js
console.log(Math.pow(5, 3))     // output: 125
console.log(Math.pow(4, 0.5))   // output: 2
console.log(Math.pow(-7, 0.5))  // output: NaN
```

## Built-In Functions

#### setTimeout()

```js

```

#### parseInt()

```js

```

#### parseFloat()

```js

```

#### isFinite()

```js

```

#### encodeURIComponent()

```js

```