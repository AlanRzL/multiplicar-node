//Requireds
const fs = require('fs');

let crearArchivo = ( base, limite = 10  ) =>{
	return new Promise ((resolve, reject)=>{

	if (!Number(base) ) {
		reject(`La base "${base}" no es un numero`)
		return;
	}

	let data = '';


	for (let i = 1; i <= limite; i++) {
		var resultado = base*i;
		data += base + ' x ' + i + ' = ' + resultado + '\n';
		//console.log(base + ' x ' + i + ' = ' + resultado);
	}

	fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
	  if (err) 
	  	reject (err)
	  else
	  	resolve (`tabla-${base}-al-${limite}.txt`)
	});



	})
}



let listarTabla = ( base, limite = 10 ) =>{

	for (let i = 1; i <= limite; i++) {
		var resultado = base*i;
		console.log(`${base} * ${i} = ${base*i}\n`);
	}
}

module.exports = {
	crearArchivo,
	listarTabla
}