package com.example.sportsbe.Services;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    public Connection openDb(){
        try {
            Class.forName("org.mariadb.jdbc.Driver");
            return DriverManager.getConnection("jdbc:mariadb://localhost:3306/rushevo_db", "root", "root");
            // return DriverManager.getConnection("jdbc:mariadb://localhost:3306/rushevo_db", "root", "root");

            //return DriverManager.getConnection("jdbc:mariadb://localhost:3306/rushevo_db", "root", "");
        } catch (SQLException e) {
            int x = 1;
        } catch (ClassNotFoundException crfex) {
            int x = 1;
        }
        return null;
    }    
}
