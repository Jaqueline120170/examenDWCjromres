//  EJERCICIO 3. Crea las funciones (exportadas) que hagan lo siguiente
//      * Devolver la lista de préstamos formateada con bootstrap, en cada fila aparecerán todos los datos del préstamo
//      * Devolver la imagen correspondiente a préstamos o a socios
//      * Devolver la lista de socios formateada con bootstrap, puedes elegir entre una tabla o una lista con los datos en cada item del socio
// Te dejo los arrays de datos necesarios:

const arrayPrestamos = [
    {id: 1, titulo: 'El Señor de los Anillos', autor: 'J.R.R. Tolkien', editorial: 'Minotauro', tema: 'aventuras', prestado: true},
    {id: 2, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', editorial: 'Planeta', tema: 'aventuras', prestado: true},
    {id: 3, titulo: 'El Sanador de Caballos', autor: 'Gonzalo Giner', editorial: 'Espasa', tema: 'novela histórica', prestado: true},
    {id: 4, titulo: 'Yo, César', autor: 'Santiago Posteguillo', editorial: 'Paaneta', tema: 'novela histórica', prestado: true},
    {id: 5, titulo: 'El gran libro de Angular', autor: 'Varios', editorial: 'Tecnolibros', tema: 'diseño web', prestado: true},
    {id: 6, titulo: 'Mil recetas de cocina', autor: 'La abuela cocinera', editorial: 'Tecnolibros', tema: 'cocina', prestado: true},
    {id: 7, titulo: 'Reinos de Sangre', autor: 'Oscar Eimil', editorial: 'epubLibre', tema: 'novela histórica', prestado: true},
    {id: 8, titulo: 'Los cinco lenguajes del amor', autor: 'Gary Chapman', editorial: 'Unilit', tema: 'familia', prestado: true},
    {id: 9, titulo: 'Paternidad Robada', autor: 'María Calvo', editorial: 'Almuzara', tema: 'familia', prestado: true},
    {id: 10, titulo: 'El Macedonio', autor: 'Nicholas Guild', editorial: 'Planeta', tema: 'historia', prestado: true},
    {id: 11, titulo: 'El Ritmo de la Guerra', autor: 'Brandon Sanderson', editorial: 'epulibre', tema: 'aventuras', prestado: true},   
];

const arraySocios = [
    {idSocio: 1001, nombre: 'Aitor Tilla Depapas', mail: 'atilpas@biblio.bi'},
    {idSocio: 1011, nombre: 'Domingo Díaz de Carreras', mail: 'ddiaras@biblio.bi'},
    {idSocio: 1013, nombre: 'Josechu Letón', mail: 'joston@biblio.bi'},
    {idSocio: 1021, nombre: 'Dolores Fuertes de Barriga', mail: 'dfuriga@biblio.bi'},
    {idSocio: 1022, nombre: 'Encarna Vales', mail: 'encles@biblio.bi'},
    {idSocio: 1025, nombre: 'Armando Jaleo', mail: 'armleo@biblio.bi'},
    {idSocio: 1129, nombre: 'Carmelo Cotón', mail: 'carton@biblio.bi'},
    {idSocio: 1131, nombre: 'Alberto Mate Frito', mail: 'atomito@biblio.bi'}
];

const imagenes = {prestamos: 'prestamosbiblio.jpg', socios: 'userbiblio.jpg', inicio: 'biblioteca.jpg'  }


// Aquí van las funciones

export function listaPrestamos() {
    
    const table = document.createElement('table');
    table.classList = "table table-striped";
    
    const categoria = document.createElement('tr');
    
    const categorias = ['ID', 'Título', 'Autor', 'Editorial', 'Tema', 'Prestado'];
    categorias.forEach(textTit => {
        const th = document.createElement('th');
        th.innerText = textTit;
        categoria.appendChild(th);
    });
    
    table.appendChild(categoria);
    
    arrayPrestamos.forEach(prestamo => {
        const tr = document.createElement('tr');
        
        const tdId = document.createElement('td');
        tdId.innerText = prestamo.id;
        tr.appendChild(tdId);
        
        const tdTitulo = document.createElement('td');
        tdTitulo.innerText = prestamo.titulo;
        tr.appendChild(tdTitulo);
        
        const tdAutor = document.createElement('td');
        tdAutor.innerText = prestamo.autor;
        tr.appendChild(tdAutor);
        
        const tdEditorial = document.createElement('td');
        tdEditorial.innerText = prestamo.editorial;
        tr.appendChild(tdEditorial);
        
        const tdTema = document.createElement('td');
        tdTema.innerText = prestamo.tema;
        tr.appendChild(tdTema);
        
        const tdPrestado = document.createElement('td');
        tdPrestado.innerText = prestamo.prestado ? 'sí está prestado' : 'no está prestado';
        tr.appendChild(tdPrestado);
        
        table.appendChild(tr);
    });
    
    return table;
}
    

export function imgPrestamos() {
   
    const img = document.createElement('img');
    img.src = imagenes.prestamos;
    img.alt = 'Imagen de préstamos';
    img.classList = "img-fluid"; 
    return img;
}

export function listaSocios() {
    
    const listaS = document.createElement('ul');
    listaS.classList = "list-group";
    
    arraySocios.forEach(socio => {
        const listaSocios = document.createElement('li');
        listaSocios.classList = "list-group-item";
        listaSocios.innerHTML = `ID: ${socio.idSocio} - 
                              Nombre: ${socio.nombre} - 
                              Email: ${socio.mail}`;
        listaS.appendChild(listaSocios);
    });
    
    return listaS;
}

export function imgSocios() {
    const img = document.createElement('img');
    img.src = imagenes.socios;
    img.alt = 'Imagen de socios';
    img.classList = "img-fluid"; 
    return img;
}
