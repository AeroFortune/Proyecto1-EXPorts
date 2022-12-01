let baseUrl = "http://localhost:8080";
let usuarios = [];
let articulos = [];

// Funciones para HeaderFooter Universales, ahorra trabajo pero lo unico malo es que no ayuda para el SEO (Search Engine Optimization).
function ImprimirHeaderFooter(){
    let contenedor = document.getElementById("top");
    contenedor.innerHTML = `<header class="barra-main ">
    <ul class="barra-nav">
        <li class="barra-nav-elementos"><a href="/index.html"><img src="/img/logo-rush.png" alt="Logo" class="logo"></a></li>
        <li class="barra-nav-elementos"><a href="/contenido/deportes/concepto.html">Concepto</a></li>
        <li class="barra-nav-elementos"><a href="/categorias.html">Categorias</a></li>
        <li class="barra-nav-elementos bridge"><a href="/contenido/busqueda.html"><img src="/img/icons/search.png" alt="Icono-Buscar" class="nav-button"></a></li>
        <li class="barra-nav-elementos"><a href="/contenido/login.html"><img src="/img/icons/user.png" alt="Icono-Login" class="nav-button"></a></li>
    </ul>
    </header>`;

    let contenedor2 = document.getElementById("bot");
    contenedor2.innerHTML = `<footer>
    <section class="logo-footer">
        <img src="/img/logo-rush.png" alt="">
    </section>
    <div class="v-line"></div>
    <section class="quick-links">
        <ul>
            <li><a class="footer-links" href="/contenido/acerca-de.html">Acerca de</a></li>
            <li><a class="footer-links" href="/contenido/contacto.html">Contactanos</a></li>
        </ul>
    </section>
    <div class="v-line"></div>
    <section class="sponsors">
        <ul>
            <li>Sponsored by...</li>
            <li><img src="" alt=""></li>
            <li><img src="" alt=""></li>
        </ul>   
    </section>
    </footer>`;

}

   
// Sección para CRUD y etc.

// Que hace esto?
const targets = document.querySelectorAll('[data-target]');
const content = document.querySelectorAll('[data-content]');
targets.forEach(target => {
	target.addEventListener('click', () => {
		content.forEach(c => {
			c.classList.remove('active')
		})
		const t = document.querySelector(target.dataset.target)
		t.classList.add('active')
	})
})

// Obtener Articulos de la BD, auto explicatorio.
function ObtenerActiculos() {
  fetch(baseUrl + '/rushevo_db/articulos/all').then(res => {
    res.json().then(json => {
      articulos = json;
      console.log(articulos);
      console.log('1');
      ImprimirArticulos();
    });
  });
}

// Imprimir Articulos, auto explicatorio.
function ImprimirArticulos() {
  let contenedor = document.getElementById("cuerpoTablaArticulos");
  contenedor.innerHTML="";

  articulos.forEach(articulo => {
    contenedor.innerHTML += MapearArticulos(articulo);
  });
}
function MapearArticulos(articulo) {
  return `<tr>
  <td>
    <button class='btn btn-danger btn-sm' onclick="EliminarArticulo(${articulo.id_pag})">Eliminar</button>
    <button class='btn btn-warning btn-sm' onclick="PopularDatosCamposArticulo(${articulo.id_pag})">Actualizar</button>
    </td>
  <td>${articulo.id_pag}</td>
  <td>${articulo.page_name}</td>
  <td>${articulo.description}</td>
  <td>${articulo.link}</td>
  <td><button onclick="window.open('${articulo.link}')">Visualizar</button></td> 
</tr>`;
}


function EliminarArticulo(pid) {
  fetch(baseUrl + '/rushevo_db/articulos/' + pid, { method: "DELETE" }).then(res => {
    console.log(res);
    ObtenerActiculos();
  });
}
function GuardarArticulo() {
  let data = {
    id_pag: document.getElementById("id_pag").value,
    page_name: document.getElementById("page_name").value,
    description: document.getElementById("description").value,
    link: document.getElementById("link").value
  };

  fetch(baseUrl + "/rushevo_db/articulos/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": 'application/json; charset=UTF-8'
    }
  }).then(res => {
    ObtenerActiculos();
  });
}
function PopularDatosCamposArticulo(pid) {
  let articulo = articulos.filter(p => { return p.id_pag == pid })[0];

  document.getElementById('id_pag').value = articulo.id_pag;
  document.getElementById('page_name').value = articulo.page_name;
  document.getElementById('description').value = articulo.description;
  document.getElementById('link').value = articulo.link;
}
function ActualizarArticulo() {
  let data = {
    id_pag: document.getElementById("id_pag").value,
    page_name: document.getElementById("page_name").value,
    description: document.getElementById("description").value,
    link: document.getElementById("link").value,
  };

  fetch(baseUrl + "/rushevo_db/articulos/", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": 'application/json; charset=UTF-8'
    }
  }).then(res => {
    ObtenerActiculos();
  });
}
//USUARIO
function ObtenerUsuarios() {
  fetch(baseUrl + '/rushevo_db/usuarios/all').then(res => {
    res.json().then(json => {
      usuarios = json;
      console.log(usuarios);
      console.log('1');
      ImprimirUsuario();
    });
  });
}

const perfil = document.querySelector("#perfil");
function ImprimirUsuario() {
    let contenedor = document.getElementById("cuerpoTablaUsuarios");
    contenedor.innerHTML="";
  
    usuarios.forEach(usuario => {
      contenedor.innerHTML += MapearUsuario(usuario);
    });
  }

  function MapearUsuario(usuario) {
    return `<tr>
    <td>
      <button class='btn btn-danger btn-sm' onclick="EliminarUsuario(${usuario.id_user})">Eliminar</button>
      <button class='btn btn-warning btn-sm' onclick="PopularDatosCampos(${usuario.id_user})">Actualizar</button>
      </td>
    <td>${usuario.id_user}</td>
    <td>${usuario.email}</td>
    <td>${usuario.nombre}</td>
    <td>${usuario.apellido}</td>
    <td>${usuario.fecha_nac}</td>
  </tr>`;
  }

  function EliminarUsuario(pid) {
    fetch(baseUrl + '/rushevo_db/usuario/' + pid, { method: "DELETE" }).then(res => {
      console.log(res);
      ObtenerUsuarios();
    });
  }

  function GuardarUsuario() {
    let data = {
      id_user: document.getElementById("id_user").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      nombre: document.getElementById("nombre").value,
      apellido: document.getElementById("apellido").value,
      fecha_nac: document.getElementById("fecha_nac").value,
    };
  
    fetch(baseUrl + "/rushevo_db/usuarios/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": 'application/json; charset=UTF-8'
      }
    }).then(res => {
        ObtenerUsuarios();
    });
  }

  function PopularDatosCampos(pid) {
    let usuario = usuarios.filter(p => { return p.id_user == pid })[0];
  
    document.getElementById('id_user').value = usuario.id_user;
    document.getElementById('email').value = usuario.email;
    document.getElementById('password').value = usuario.password;
    document.getElementById('nombre').value = usuario.nombre;
    document.getElementById('apellido').value = usuario.apellido;
    document.getElementById('fecha_nac').value = usuario.fecha_nac;
  }

  function ActualizarUsuario() {
    let data = {
      id_user: document.getElementById("id_user").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      nombre: document.getElementById("nombre").value,
      apellido: document.getElementById("apellido").value,
      fecha_nac: document.getElementById("fecha_nac").value
    };
  
    fetch(baseUrl + "/rushevo_db/usuarios/", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": 'application/json; charset=UTF-8'
      }
    }).then(res => {
      ObtenerUsuarios();
    });
  }

  function PopularDatosCamposPerfil(gato) {
    let usuario = usuarios.filter(p => { return p.id_user == gato })[0];
  
    document.getElementById('email').value = usuario.email;
    document.getElementById('password').value = usuario.password;
    document.getElementById('nombre').value = usuario.nombre;
    document.getElementById('apellido').value = usuario.apellido;
    document.getElementById('fecha_nac').value = usuario.fecha_nac;
  }

  function CargarPerfil(){


    let send = {
      pid: localStorage.getItem("prueba")
    };

    // enviar ID a backend > backend retorna data > data es colocada en respectivos lugares
    let data = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      nombre: document.getElementById("nombre").value,
      apellido: document.getElementById("apellido").value,
      fecha_nac: document.getElementById("fecha_nac").value
    };
  
    fetch(baseUrl + "/rushevo_db/usuarios/", {
      method: "PUT",
      body: JSON.stringify(send),
      headers: {
        "Content-type": 'application/json; charset=UTF-8'
      }
    }).then(res => { res.json().then(json => {
      data = json;
      console.log(data);
      console.log('1');   
      document.getElementById('id_user').value = data.id_user;
      document.getElementById('email').value = data.email;
      document.getElementById('password').value = data.password;
      document.getElementById('nombre').value = data.nombre;
      document.getElementById('apellido').value = data.apellido;
      document.getElementById('fecha_nac').value = data.fecha_nac;
    });
    });

  }


  function capturar() {

    let send = {
      email: document.getElementById("email_login").value,
      password: document.getElementById("password_login").value
    };

    fetch(baseUrl + '/rushevo_db/login/', {
      method: "POST",
      body: JSON.stringify(send),
      headers: {
        "Content-type": 'application/json; charset=UTF-8'
      }
      }).then(res => { 
        res.json().then( json_userid => {
          console.log(json_userid);
          if (json_userid != 0){
            alert("Bienvenido!");
            window.location.href = "/contenido/perfil.html";
            localStorage.setItem("prueba", json_userid);
          } else {
            alert("Datos incorrectos! Por favor verificar e intentarlo otra vez.");
          }
        });
      });
    }
    

    function RegistrarUsuario() {
      let data = {
        email: document.getElementById("emailRegistro").value,
        password: document.getElementById("passwordRegistro").value,
        nombre: document.getElementById("nombreRegistro").value,
        apellido: document.getElementById("apellidoRegistro").value,
        fecha_nac: document.getElementById("fecha_nacRegistro").value,
      };
    
      fetch(baseUrl + "/rushevo_db/usuarios/", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": 'application/json; charset=UTF-8'
        }
      }).then(res => {
          alert("Usted se ha registrado!");
          console.log(res);
      });
    } 

//buscar


const formulario = document.querySelector("#formulario");
const boton = document.querySelector("#boton")
const resultado = document.querySelector("#resultado")

const filtrar = () => {
  ObtenerActiculos();
  resultado.innerHTML = "";
  const texto = formulario.value.toLowerCase();

  for(let articulo of articulos){
      let page_name = articulo.page_name.toLowerCase();
      if(page_name.indexOf(texto)!== -1){
          resultado.innerHTML += `<a href="${articulo.link}"class=" pag list-group-item "><h4>${articulo.page_name}</h4><p>${articulo.description}</p></a> `
      }
  }

  if(resultado.innerHTML === ""){
      resultado.innerHTML += `<a href="" class=" pag list-group-item list-group-item-action">Producto no encontrado...</a>`
  }
}
boton.addEventListener("click", filtrar)
formulario.addEventListener("keyup",filtrar)
filtrar();

//perfil

