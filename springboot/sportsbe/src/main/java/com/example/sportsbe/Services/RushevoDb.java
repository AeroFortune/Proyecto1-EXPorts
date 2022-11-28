package com.example.sportsbe.Services;

import java.sql.Statement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;


import com.example.sportsbe.Models.*;

public class RushevoDb {
    Connection _cn;

    public RushevoDb(){
        _cn = new Conexion().openDb();
    }

    public List<Articulos> ObtenerArticulos(){
        try {
            Statement stmt = _cn.createStatement();
            String query = "SELECT * FROM articulos";

            List<Articulos> articulos = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while(result.next()){
                Articulos articulo = new Articulos(
                    result.getInt("id_pag"),
                    result.getString("page_name"),
                    result.getString("description"),
                    result.getString("link")
                    );
                articulos.add(articulo);
            }
            result.close();
            stmt.close();
            return articulos;
        } catch (Exception e) {
            int x = 1;
            e.printStackTrace();
        }
        return null;
    }

    public List<Usuarios> ObtenerUsuarios(){
        try {
            Statement stmt = _cn.createStatement();
            String query = "SELECT * FROM usuarios";

            List<Usuarios> usuarios = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while(result.next()){
                Usuarios usuario = new Usuarios(
                    result.getInt("id_user"),
                    result.getString("email"),
                    result.getString("password"),
                    result.getString("nombre"),
                    result.getString("apellido"),
                    result.getDate("fecha_nac")
                    );
                usuarios.add(usuario);
            }
            result.close();
            stmt.close();
            return usuarios;
            
        } catch (Exception e) {
            int x = 1;
            e.printStackTrace();
        }
        return null;    
    }


    // public List<Usuarios> EliminarUsuarios(){

    // }

    // public List<Usuarios> ModificarUsuarios(){
        
    // }
    
    public int GuardarUsuarios(Usuarios usuario){
        int resultado = 0;
        try {
            Statement stm = _cn.createStatement();
            String query = "insert into usuarios (email, password, nombre, apellido, fecha_nac) values ('" + usuario.getEmail() + "','" + usuario.getPassword() + "','" + usuario.getNombre() + "','" + usuario.getApellido() + "','" + usuario.getFecha_nac() + "')";
            resultado = stm.executeUpdate(query);

            return resultado;     
        } catch (Exception e) {
            int x=1;
        }
        return resultado;
    }
}
