package com.example.sportsbe.Controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sportsbe.Models.Usuarios;

@RestController
@CrossOrigin
public class RushEvoController {

    @GetMapping("/rushevo_db/usuarios")
    public List<Usuarios> ObtenerUsuarios(){
        return null;
        // Modificar cuando RushevoDb se haga!
    }

    // @GetMapping("/rushevo_db/articulos")
    // public List<Articulos> ObtenerArticulos(){
    //     return null;
    //     // Modificar cuando RushevoDb se haga!
    // }
    
}
