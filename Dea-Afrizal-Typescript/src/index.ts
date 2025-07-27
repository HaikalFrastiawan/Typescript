// let namaSaya: string = "haikal"
// let userName: number = 123
// let isdead: boolean = false

// //array biasa
// let pacarSaya: string[]
// pacarSaya = ["ariltatum", "sjopia"]

// //tuple array
// let selingkuhan: [string,number,boolean]
// selingkuhan = ["agnes", 30, true]




// console.log({namaSaya})
// console.log({userName})
// console.log({isdead})
// console.log({pacarSaya})
// console.log({selingkuhan})


//!Type data custom
// type TemanType ={
//     nama: string,
//     isKampret: boolean,
//     hutang: number
// }

// let temanKita: TemanType

// temanKita = {
//     nama: "ilham",
//     isKampret: true,
//     hutang: 50_000
// }

// console.log(temanKita)



// function create (): string{
//     return "hallo"
// }

// const create2 = () : string => "ini create2"

// console.log(create())
// console.log(create2())


// const  create3 = (): void => {
//     console.log("ini adalah fungsi tanpa pengembalian nilai");
// }
// create3()


// function jumlah(x: number, y: number): void {
//     const z = x + y
//     console.log("hasilnya adalah:" + z )
// }

// jumlah(10,20)



interface IProcessor  {
    brand: string
    baseModel: string
    modelName: string
    clockSize: number
}

const interCore5 = {
    brand: "intel",
    baseModel: "corei5",
    modelName: "i5ffafddaf",
    clockSize: 4
}

function create(processor: IProcessor) : void{
    console.log("berhasil membuat processor" + processor.brand)
}

create(interCore5)