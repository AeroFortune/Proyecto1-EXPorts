package com.example.sportsbe.Controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sportsbe.Models.Articulos;
import com.example.sportsbe.Models.ImagenesArticulos;
import com.example.sportsbe.Models.UserLogin;
import com.example.sportsbe.Models.Usuarios;
import com.example.sportsbe.Services.RushevoDb;

import com.github.cliftonlabs.json_simple.JsonObject;

@RestController
@CrossOrigin
@Controller
public class RushEvoController {
    //ARTICULOS
    @GetMapping("/rushevo_db/articulos/all")    
    public List<Articulos> ObtenerArticulos(){
        return new RushevoDb().ObtenerArticulos();
    }
    @PostMapping("/rushevo_db/articulos/")
    public int InsertarArticulo(@RequestBody Articulos articulo){
        return new RushevoDb().GuardarArticulos(articulo); 
    }

    @PutMapping("/rushevo_db/articulos/")
    public int ActualizarArticulo(@RequestBody Articulos articulo){
        return new RushevoDb().ActualizarArticulos(articulo); 
    }
    
    @DeleteMapping("/rushevo_db/articulos/{id_pag}")
    public int DeleteArticulo(@PathVariable("id_pag") int pid){
        return new RushevoDb().EliminarArticulo(pid); 
        //
    }
    //USUARIOS
    @GetMapping("/rushevo_db/usuarios/all")
    public List<Usuarios> ObtenerUsuarios(){
        return new RushevoDb().ObtenerUsuarios();
    }

    @PostMapping("/rushevo_db/usuarios/")
    public int InsertarUsuario(@RequestBody Usuarios usuario){
        return new RushevoDb().GuardarUsuarios(usuario); 
    }

    @PutMapping("/rushevo_db/usuarios/")
    public int ActualizarUsuario(@RequestBody Usuarios usuario){
        return new RushevoDb().ActualizarUsuario(usuario); 
    }
    
    @DeleteMapping("/rushevo_db/usuarios/{id_user}")
    public int DeleteUsuario(@PathVariable("id_user") int pid){
        return new RushevoDb().EliminarUsuario(pid); 
    }

    @PostMapping("/rushevo_db/login/")
    public int ObtenerRespuesta(@RequestBody Usuarios usuario){
        return new RushevoDb().ValidarUsuarios(usuario);
    }

    @GetMapping("/rushevo_db/usuarios/{id_user}")
    public List<Usuarios> ObtenerUsuariosID(@PathVariable("id_user") int pid){
        return new RushevoDb().ObtenerUsuariosPorId(pid);
    }

    @GetMapping("/rushevo_db/imagenes/all")
    public List<ImagenesArticulos> ObtenerImagenes(){
        return new RushevoDb().ObtenerImagenes();
    }




    

}
