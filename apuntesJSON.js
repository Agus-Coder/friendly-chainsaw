// revisar 11va clase para ver modulos


const gimliJSON = JSON.stringify(gimli)

console.log(gimliJSON)

localStorage.setItem('Gimli', gimliJSON)

const testGimli = localStorage.getItem('Gimli')



console.log(`Esto es lo que rescate del local storage, ${testGimli}`)


const gimliTestParseado = JSON.parse(testGimli)


console.log(`Esto es lo que rescate del local storage, parseado: ${gimliTestParseado.name}, su nivel es ${gimliTestParseado.level}`)



// name, charClass, level, hp







