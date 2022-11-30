const targets = document.querySelectorAll('[data-target]')
const content = document.querySelectorAll('[data-content]')
targets.forEach(target => {
	target.addEventListener('click', () => {
		content.forEach(c => {
			c.classList.remove('active')
		})
		const t = document.querySelector(target.dataset.target)
		t.classList.add('active')
	})
})

let baseUrl = "http://localhost:8080";
let usuarios = [];

function ObtenerUsuarios() {
  fetch(baseUrl + '/rushevo_db/usuarios/all').then(res => {
    res.json().then(json => {
      usuarios = json;
      ImprimirUsuario();
    });
  });
}


function ImprimirUsuario() {
    let contenedor = document.getElementById("cuerpoTabla");
    contenedor.innerHTML = "";
  
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
  
    fetch(baseUrl + 
        "/rushevo_db/usuarios/", {
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