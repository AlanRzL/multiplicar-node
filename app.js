const argv  = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch(comando){
	case 'listar':
		console.log('Comando listar');
		listarTabla(argv.base, argv.limite);
	break;

	case 'crear':
		console.log('Comando crear');
		crearArchivo(argv.base, argv.limite)
			.then(archivo => console.log(`Archivo creado: ${archivo}`))
			.catch(e => console.log(e));
	break;

	default:
		console.log('Comando no reconocido');
}


let argv2 = process.argv;
/*let parametro = argv[2];
let base = parametro.split('=')[1];*/

