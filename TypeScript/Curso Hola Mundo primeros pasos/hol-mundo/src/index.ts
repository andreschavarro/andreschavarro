let mensaje: string = "Hola mundo"

mensaje = "CHANCHITO FELIZ"

console.log(mensaje)
mensaje = "chao mundo"


console.log(typeof [])



// tipos de TS
// any
// unknow
// never
// arrays
// tuplas
// Enums


// tipos Inferidos

let extencionDinosaurios: number = 76_000_00  
let dinosauriosFavorito: string = "T-Rex"
let extintos: boolean = true 

function chanchitoFeliz(congig: any) {
    return congig
}


// ARRAYS


let animales: string[] = ['chanchito','feliz','felipe']

let numeros: number[] = [1,2,3]

let checks: boolean[] = []

let nums2: Array<number> = []   // tipo e dato arreglo de number 

animales.map(x => x)      // nos permite mapear nuestro arreglo y reconoce eel tipo de dato al ponerle un punto en la x nos muestra las diferentes opciones

let tula: [number, string[]] = [1,['felipe', 'chanchito']]
//tupla.push(12)   // error




const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'


// PascalCase

enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl' }


const variable1 = Talla.Grande

console.log(variable1)


enum loadingState {Idle}



// Objetos

const estado = loadingState.Idle

