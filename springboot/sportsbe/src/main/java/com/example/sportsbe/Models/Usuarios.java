package com.example.sportsbe.Models;

public class Usuarios {
    private int id_user;
    private String email, password, apellido, fecha;

    public Usuarios(int id_user, String email, String password, String apellido, String fecha) {
        this.id_user = id_user;
        this.email = email;
        this.password = password;
        this.apellido = apellido;
        this.fecha = fecha;
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
    public String getApellido() {
        return apellido;
    }
    public void setApellido(String apellido) {
        this.apellido = apellido;
    }
    public String getFecha() {
        return fecha;
    }
    public void setFecha(String fecha) {
        this.fecha = fecha;
    }
    
}
