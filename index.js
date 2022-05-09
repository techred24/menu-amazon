const d = document;
const btnDepartamentos = d.getElementById('btn-departamentos');
const dropDownMenu = d.getElementById('grid');
const btnCerrarMenu = d.getElementById('btn-menu-cerrar');
const esDispositivoMovil = () => window.innerWidth <= 800;
const abrirMenu = d.querySelector('.contenedor-enlaces-nav');
const contenedorSubCategorias = d.querySelector('#grid .contenedor-subcategorias');
btnDepartamentos.addEventListener('mouseover',()=>{
    if(!esDispositivoMovil()){
        dropDownMenu.classList.add('activo');
    }
})
btnDepartamentos.addEventListener('mouseleave',()=>{
    if(!esDispositivoMovil()){
        dropDownMenu.classList.remove('activo');
    }
})
d.querySelectorAll('#menu .categorias a').forEach((enlace) => {
    enlace.addEventListener('mouseenter', (e) => {
        if(!esDispositivoMovil()){
            // Cuando se pasa sobre cada enlace se obtienen las subcategorias
            d.querySelectorAll('#menu .subcategoria').forEach((subcategoria) => {
            // Elimina en todas las subcategorias la clase activo al entrar al enlace
            subcategoria.classList.remove('activo');
            // Se comprueba que la subcategoría actual que que tiene el mouse encima coincida con una de las subcategorias y se le agrega la clase activo sólo esa.
            if(subcategoria.dataset.categoria===e.target.dataset.categoria){
                subcategoria.classList.add('activo');
            }
        })
        }
    })
    if(esDispositivoMovil()){
        // Agregando el evento click a cada enlace de las categorias
        enlace.addEventListener('click',(e) => {
            d.querySelectorAll('#menu .subcategoria').forEach((subcategoria) => {
                subcategoria.classList.remove('activo');
                if(subcategoria.dataset.categoria===e.target.dataset.categoria){
                    d.querySelector('.contenedor-subcategorias').classList.add('activo');
                    subcategoria.classList.add('activo');
                }
            })
        })
    }
})
d.querySelectorAll('.contenedor-subcategorias .subcategoria .btn-regresar').forEach((subcategoria) => {
    // Agregando evento click al boton regresar de cada subcategoria
    subcategoria.addEventListener('click',() => {
        d.querySelector('.contenedor-subcategorias').classList.remove('activo');
    })
})

d.getElementById('btn-menu-barras').addEventListener('click',(e) => {
    if(abrirMenu.classList.contains('activo')){
        abrirMenu.classList.remove('activo');
        // d.querySelector('body').style.overflow = 'visible';
        return
    }
    // d.querySelector('body').style.overflow = 'hidden';
    abrirMenu.classList.add('activo');
})
d.getElementById('btn-departamentos').addEventListener('click',(e) => {
    e.preventDefault();
    dropDownMenu.classList.add('activo');
    btnCerrarMenu.classList.add('activo');
})
d.querySelector('.btn-regresar').addEventListener('click',() => {
	// e.preventDefault();
    dropDownMenu.classList.remove('activo');
    btnCerrarMenu.classList.remove('activo');
})
d.querySelectorAll("#menu .categorias a").forEach(el => {
	el.addEventListener('click', (e) => {
		e.preventDefault();
		if (esDispositivoMovil()) {
			contenedorSubCategorias.classList.add('activo');
			// document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
			// 	categoria.classList.remove('activo');
			// 	if(categoria.dataset.categoria == e.target.dataset.categoria){
			// 		categoria.classList.add('activo');
			// 	}
			// });
		}
	})
})
btnCerrarMenu.addEventListener('click',() => {
    d.querySelector('.contenedor-subcategorias').classList.remove('activo');
    btnCerrarMenu.classList.remove('activo');
    dropDownMenu.classList.remove('activo');
    abrirMenu.classList.remove('activo');
})

dropDownMenu.addEventListener('mouseover',()=>{
    dropDownMenu.classList.add('activo');
})
dropDownMenu.addEventListener('mouseout',()=>{
    dropDownMenu.classList.remove('activo');
})
















// const btnDepartamentos = document.getElementById('btn-departamentos'),
// 	  btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
// 	  grid = document.getElementById('grid'),
// 	  contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
// 	  contenedorSubCategorias = document.querySelector('#grid .contenedor-subcategorias'),
// 	  esDispositivoMovil = () => window.innerWidth <= 800;

// btnDepartamentos.addEventListener('mouseover', () => {
// 	if(!esDispositivoMovil()){
// 		grid.classList.add('activo');
// 	}
// });

// grid.addEventListener('mouseleave', () => {
// 	if(!esDispositivoMovil()){
// 		grid.classList.remove('activo');
// 	}
// });

// document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
// 	elemento.addEventListener('mouseenter', (e) => {
// 		if(!esDispositivoMovil()){
// 			document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
// 				categoria.classList.remove('activo');
// 				if(categoria.dataset.categoria == e.target.dataset.categoria){
// 					categoria.classList.add('activo');
// 				}
// 			});
// 		};
// 	});
// });

// // EventListeners para dispositivo movil.
// document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
// 	e.preventDefault();
// 	if(contenedorEnlacesNav.classList.contains('activo')){
// 		contenedorEnlacesNav.classList.remove('activo');
// 		document.querySelector('body').style.overflow = 'visible';
// 	} else {
// 		contenedorEnlacesNav.classList.add('activo');
// 		document.querySelector('body').style.overflow = 'hidden';
// 	}
// });

// // Click en boton de todos los departamentos (Para version movil).
// btnDepartamentos.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	grid.classList.add('activo');
// 	btnCerrarMenu.classList.add('activo');
// });

// // Boton de regresar en el menu de categorias
// document.querySelector('#grid .categorias .btn-regresar').addEventListener('click', (e) => {
// 	e.preventDefault();
// 	grid.classList.remove('activo');
// 	btnCerrarMenu.classList.remove('activo');
// });

// document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
// 	elemento.addEventListener('click', (e) => {
// 		if(esDispositivoMovil()){
// 			contenedorSubCategorias.classList.add('activo');
// 			document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
// 				categoria.classList.remove('activo');
// 				if(categoria.dataset.categoria == e.target.dataset.categoria){
// 					categoria.classList.add('activo');
// 				}
// 			});
// 		}
// 	});
// });

// // Boton de regresar en el menu de categorias
// document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton) => {
// 	boton.addEventListener('click', (e) => {
// 		e.preventDefault();
// 		contenedorSubCategorias.classList.remove('activo');
// 	});
// });

// btnCerrarMenu.addEventListener('click', (e)=> {
// 	e.preventDefault();
// 	document.querySelectorAll('#menu .activo').forEach((elemento) => {
// 		elemento.classList.remove('activo');
// 	});
// 	document.querySelector('body').style.overflow = 'visible';
// });