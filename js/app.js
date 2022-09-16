const form = document.querySelector('#input-form');
const out = document.querySelector('#candidato');

const http = new TMhttp;

http.get('../../PAGINA/OTRO/src/app/Controllers/candidatos.php')
	.then(data => {
		console.log(data)
		let outText = '';
		data.more.forEach(item => {
			outText += `
                <ul>
                    <li>${ item.nombre } ${ item.apellidos }
                        <ul id="ofertas-${item.idCandidato}"></ul>
                    </li>
                </ul>`
			out.innerHTML = outText;
			pepe(item.idCandidato)

		});
	})
	.catch(err => console.log(err));
e.preventDefault();

function pepe(data) {
	const http2 = new TMhttp;

	http2.get('../../PAGINA/OTRO/src/app/Controllers/candidato_ofertas.php')
		.then(data2 => {
			const off = document.querySelector('#ofertas-' + data + '');
			let oferta = data2.more.filter(ofer => ofer.id_candidato === data);

			let offText = '';
			off.innerHTML = oferta.forEach(item => {
				offText += 
				`
                <li>${ item.oferta } </li>
                `

			});
			off.innerHTML = offText;
		})
		.catch(err => console.log(err));
}

const getOfer = document.querySelector('#btn-get-ofer').addEventListener('click', (e) => {
	
	const http = new TMhttp;
	http.get('../../PAGINA/OTRO/src/app/Controllers/ofertas.php')
		.then(data => {

			const oferta = document.querySelector('#ofertas');
			let ofertasText = '<label for="cars">Choose a car:</label><select name="ofertas" id="oferta">';
			data.more.forEach(item => {


				ofertasText += `<option value="${item.id_cont}">${item.oferta}</option>`;
			})
			ofertasText += `</select><div id="campoOfertas">`;
			oferta.innerHTML = ofertasText;

			var select = document.querySelector("#oferta");
			select.addEventListener('change', capturarValor);

			function capturarValor() {
				var valor = select.value;
				var pepe = document.querySelector("#campoOfertas");
				let oferta = data.valor.filter(ofer => ofer.id_cont === data);
				pepe.innerHTML = oferta.oferta;
				console.log(data)
				console.log(valor);
			}

		})
		.catch(err => console.log(err));
	e.preventDefault();
});
