let baseUrl = "http://localhost:8080";
let usuarios = [];
// Funciones para HeaderFooter Universales
function ImprimirHeaderFooter() {
  let contenedor = document.getElementById("top");
  contenedor.innerHTML = ObtenerHeader();

  let contenedor2 = document.getElementById("bot");
  contenedor2.innerHTML = ObtenerFooter();

}

function ObtenerHeader() {
  return `<header class="barra-main">
    <ul class="barra-nav">
        <li class="barra-nav-elementos"><a href="/index.html"><img src="/img/logo-rush.png" alt="Logo" class="logo"></a></li>
        <li class="barra-nav-elementos"><a href="/contenido/deportes/concepto.html">Concepto</a></li>
        <li class="barra-nav-elementos"><a href="/categorias.html">Categorias</a></li>
        <li class="barra-nav-elementos bridge"><a href="/contenido/busqueda.html"><img src="/img/icons/search.png" alt="Icono-Buscar" class="nav-button"></a></li>
        <li class="barra-nav-elementos"><a href="/contenido/login.html"><img src="/img/icons/user.png" alt="Icono-Login" class="nav-button"></a></li>
    </ul>
    </header>`;
}

function ObtenerFooter() {
  return `<footer>
    <section class="logo-footer">
        <img src="/img/logo-rush.png" alt="">
    </section>
    <div class="v-line"></div>
    <section class="quick-links">
        <ul>
            <li><a href="/contenido/acerca-de.html">Acerca de</a></li>
            <li><a href="/contenido/contacto.html">Contactanos</a></li>
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

// Funciones para CRUD y etc
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


function ImprimirUsuario() {
  let contenedor = document.getElementById("cuerpoTablaUsuarios");

  usuarios.forEach(usuario => {
    contenedor.innerHTML += MapearUsuario(usuario);
  });
}

function MapearUsuario(usuario) {
  return `<tr>
    <td>
      <button class='btn btn-danger btn-sm' onclick="EliminarProducto(${usuario.id_user})">Eliminar</button>
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
  fetch(baseUrl + '/usuario/' + pid, { method: "Delete" }).then(res => {
    console.log(res);
    ObtenerUsuarios();
  });
}

function GuardarUsuario() {
  let data = {
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
  let usuario = usuarios.filter(p => { return p.id == pid })[0];

  document.getElementById('id_user').value = usuario.id_user;
  document.getElementById('email').value = usuario.email;
  document.getElementById('nombre').value = usuario.nombre;
  document.getElementById('apellido').value = usuario.apellido;
  document.getElementById('fecha_nac').value = usuario.fecha_nac;
}

function capturar() {

    let send ={
      mail :document.getElementById("mail").value,

      pass :document.getElementById("pass").value,

    }

    fetch(baseUrl + "/rushevo_db/all", {
      method: "POST",
      body: JSON.stringify(send),
      headers: {
        "Content-type": 'application/json; charset=UTF-8'
      }
    }).then(res => {
      if(res==1)
      {
        window.location.href = "/contenido/perfil.html";
        alert("Se le va a redirigir CUIDAO!");
      }
    });

    
}