    
const out = document.querySelector('#seccionRedes');
const http = new TMhttp;
http.get('js/data.js')
    .then(data => {
        let outText = '';
        data.more.forEach(item => {
            outText+= `
                <div class="col-lg-4 col-xs-12 text-center">
			<div class="box">
				<div class="accordion">
					<i class="fa fa-plus-square fa-1x" id="ver-redes-${item.idCard}" onclick="myFunction(${item.idCard})"  aria-hidden="true"></i>
				</div>
                        	<i class="fa ${item.icono} fa-3x" aria-hidden="true"></i>
				<div class="box-title">
					<h3>${item.nombre}</h3>
				</div>
				<div class="box-text">
					<span>${item.descripcion}</span>
				</div>					    
				<div id="oculto-${item.idCard}" style="display:none">
				</div>
			</div>
		</div>`;
            out.innerHTML = outText;
        });
    })
    .catch(err => console.log(err));
 
 function myFunction(id) {                
 	var oculto = document.querySelector('#oculto-' + id + '');
        const http = new TMhttp;
	http.get('js/data_des.js')
    		.then(data => {
       			const pepe = document.querySelector('#ver-redes-' + id + '');              
       			if (oculto.style.display === "none") {
            			oculto.style.display = "block";
            			pepe.classList.replace("fa-plus-square", "fa-minus-square");
           			 outText = "";
            			let oferta = data.more.filter(ofer => ofer.idCard == id);
            			console.log(oferta)
            			if (oferta.length > 0) {
            				oferta.forEach(item => {
            				outText  += `
						<div class="d-flex flex-row border rounded espacio">
	  						<div class="p-0 w-25">
	  			    				<img src="${item.imagen}" class="img-thumbnail border-0" />	  				
	  						</div>
	  						<div class="pl-3 pt-2 pr-2 pb-2 w-75 border-left">
	  							<h6 class="text-primary">${item.cuenta}</h6>
	  							<div class="box-btn">
	  								<a href="${item.enlace}"><button type="button" class="btn btn-outline-primary">Ver mas</button></a>					        
					   			</div>					
							</div>
						</div>`; 
					}) 
				} else {
                			outText  += `<div class="d-flex flex-row border rounded azul">No hay datos que mostrar</div>`;
           			}
            			oculto.innerHTML = outText;
            
    			} else {
        			oculto.style.display = "none";
       				 pepe.classList.replace("fa-minus-square", "fa-plus-square");
    			}
    });
	console.log("He apretado - " + id);
}
            
           
