package com.example.inventory.model;

public class Inventory {

    private int id;
    private String productName;
    private String category;
    private double price;
    private String supplier;

    public Inventory() {}

    public Inventory(int id, String productName, String category, double price, String supplier) {
        this.id = id;
        this.productName = productName;
        this.category = category;
        this.price = price;
        this.supplier = supplier;
    }

    public int getId() { return id; }
    public String getProductName() { return productName; }
    public String getCategory() { return category; }
    public double getPrice() { return price; }
    public String getSupplier() { return supplier; }

    public void setId(int id) { this.id = id; }
    public void setProductName(String productName) { this.productName = productName; }
    public void setCategory(String category) { this.category = category; }
    public void setPrice(double price) { this.price = price; }
    public void setSupplier(String supplier) { this.supplier = supplier; }
    
}
