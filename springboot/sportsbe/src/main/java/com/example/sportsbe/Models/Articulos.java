package com.example.sportsbe.Models;

public class Articulos {
    private int id_pag;
    private String page_name, description, link;

    public Articulos(int id_pag, String page_name, String description, String link) {
        this.id_pag = id_pag;
        this.page_name = page_name;
        this.description = description;
        this.link = link;
    }

    public int getId_pag() {
        return id_pag;
    }
    public void setId_pag(int id_pag) {
        this.id_pag = id_pag;
    }
    public String getPage_name() {
        return page_name;
    }
    public void setPage_name(String page_name) {
        this.page_name = page_name;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getLink() {
        return link;
    }
    public void setLink(String link) {
        this.link = link;
    }

    

    
}
