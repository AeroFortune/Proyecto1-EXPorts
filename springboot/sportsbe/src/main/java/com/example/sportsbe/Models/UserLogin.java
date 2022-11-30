package com.example.sportsbe.Models;

public class UserLogin {

    
    private String email;
    private String password;

    
    public UserLogin(String email, String password) {
        this.email = email;
        this.password = password;
    }


    public String getMail() {
        return email;
    }
    public void setMail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }


}
