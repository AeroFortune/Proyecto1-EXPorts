package com.example.sportsbe.Models;

public class ImagenesArticulos {
    private int id_img, pag_id;
    private String img_name, img_url;

    public ImagenesArticulos(int id_img, int pag_id, String img_name, String img_url) {
        this.id_img = id_img;
        this.pag_id = pag_id;
        this.img_name = img_name;
        this.img_url = img_url;
    }

    public int getId_img() {
        return id_img;
    }
    public void setId_img(int id_img) {
        this.id_img = id_img;
    }
    public int getPag_id() {
        return pag_id;
    }
    public void setPag_id(int pag_id) {
        this.pag_id = pag_id;
    }
    public String getImg_name() {
        return img_name;
    }
    public void setImg_name(String img_name) {
        this.img_name = img_name;
    }
    public String getImg_url() {
        return img_url;
    }
    public void setImg_url(String img_url) {
        this.img_url = img_url;
    }

    
}
