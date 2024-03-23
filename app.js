const { faker } = require('@faker-js/faker');
const fs    = require('fs');
const turf  = require('@turf/turf');

const polygon = JSON.parse(fs.readFileSync('./geodata/replubicMexicana.geojson'))

const generateRandomDataByMexico = numPoints => {
    const coordinates = [];
    const bbox = turf.bbox(polygon);
    
    let i = 1;
    while( coordinates.length < numPoints ){
        const lat = Math.random() * (bbox[3] - bbox[1]) + bbox[1]; // Generar latitud aleatoria dentro del bounding box
        const lng = Math.random() * (bbox[2] - bbox[0]) + bbox[0]; // Generar longitud aleatoria dentro del bounding box
        const point = turf.point([lng, lat]);
        
        // Verificar si el punto está dentro del polígono
        if (turf.booleanPointInPolygon(point, polygon)) {
            const id   = i + 1;
            const name = faker.person.fullName();
            const birthdate = faker.date.birthdate();
            const phone = faker.phone.number();
            coordinates.push({ id, position: { lat,lng } ,phone,birthdate, name });
            i++;
        }
    }

    return coordinates;
}

const createFile = ( ubication, json ) =>{
    return new Promise((resolve,reject)=>{
        fs.writeFileSync( ubication, JSON.stringify(json,null,2),(err)=>{
            if(err) reject(err);
            resolve();
        })
    });
}

const init = async ( cantidad ) =>{
    try{
        let data = generateRandomDataByMexico(cantidad);
        let file = await createFile( './data/data.json', data );

        console.log('Archivo generado correctamente.');
    }catch(err){
        console.log('Error',err);
    }
}

const cantidaDatos = 100;
init( cantidaDatos );