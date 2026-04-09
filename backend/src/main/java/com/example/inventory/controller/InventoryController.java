package com.example.inventory.controller;

import com.example.inventory.model.Inventory;
import com.example.inventory.service.InventoryService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*") // allow React
public class InventoryController {

    private final InventoryService service;

    public InventoryController(InventoryService service) {
        this.service = service;
    }

    @GetMapping("/search")
    public List<Inventory> search(
            @RequestParam(required = false) String q,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) Double minPrice,
            @RequestParam(required = false) Double maxPrice
    ) {
        return service.search(q, category, minPrice, maxPrice);
    }

    
}