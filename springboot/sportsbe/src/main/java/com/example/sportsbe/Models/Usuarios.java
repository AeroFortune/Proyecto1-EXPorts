package com.example.sportsbe.Models;

import java.sql.Date;

public class Usuarios {
    
    private int id_user;
    private String email; 
    private String password;
    private String nombre;
    private String apellido;
    private Date fecha_nac;

    public Usuarios(int id_user, String email, String password, String nombre, String apellido, Date fecha_nac) {
        this.id_user = id_user;
        this.email = email;
        this.password = password;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha_nac = fecha_nac;
    }

    public int getId_user() {
        return id_user;
    }
    public void setId_user(int id_user) {
        this.id_user = id_user;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }
    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public Date getFecha_nac() {
        return fecha_nac;
    }

    public void setFecha_nac(Date fecha_nac) {
        this.fecha_nac = fecha_nac;
    }
  
}
