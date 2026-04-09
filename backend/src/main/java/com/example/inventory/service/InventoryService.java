// package com.example.inventory.service;
// import com.fasterxml.jackson.core.type.TypeReference;
// import com.fasterxml.jackson.databind.ObjectMapper;
// import com.example.inventory.model.Inventory;
// import org.springframework.core.io.ClassPathResource;
// import org.springframework.stereotype.Service;

// import jakarta.annotation.PostConstruct;
// import java.io.InputStream;
// import java.util.ArrayList;
// import java.util.List;
// import java.util.stream.Collectors;

// @Service
// public class InventoryService {

//     private List<Inventory> inventoryList = new ArrayList<>();

//     @PostConstruct
//     public void loadData() {
//         try {
//             ObjectMapper mapper = new ObjectMapper();
//             InputStream inputStream = new ClassPathResource("inventory.json").getInputStream();
//             inventoryList = mapper.readValue(inputStream, new TypeReference<List<Inventory>>() {});
//         } catch (Exception e) {
//             e.printStackTrace();
//         }
//     }

//     public List<Inventory> search(String q, String category, Double minPrice, Double maxPrice) {

//         if (minPrice != null && maxPrice != null && minPrice > maxPrice) {
//             throw new IllegalArgumentException("Minimum price cannot be greater than maximum price");
//         }

//         return inventoryList.stream()
//                 .filter(item -> q == null || item.getProductName().toLowerCase().contains(q.toLowerCase()))
//                 .filter(item -> category == null || item.getCategory().equalsIgnoreCase(category))
//                 .filter(item -> minPrice == null || item.getPrice() >= minPrice)
//                 .filter(item -> maxPrice == null || item.getPrice() <= maxPrice)
//                 .collect(Collectors.toList());
//     }
// }


package com.example.inventory.service;

import com.example.inventory.model.Inventory;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class InventoryService {

    private List<Inventory> inventoryList = new ArrayList<>();

    @PostConstruct
    public void loadData() {
        try {
            ObjectMapper mapper = new ObjectMapper();
            InputStream inputStream = new ClassPathResource("inventory.json").getInputStream();
            inventoryList = mapper.readValue(inputStream, new TypeReference<List<Inventory>>() {});
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public List<Inventory> search(String q, String category, Double minPrice, Double maxPrice) {

        if (minPrice != null && maxPrice != null && minPrice > maxPrice) {
            throw new IllegalArgumentException("Minimum price cannot be greater than maximum price");
        }

        return inventoryList.stream()
                .filter(item -> q == null || item.getProductName().toLowerCase().contains(q.toLowerCase()))
                .filter(item -> category == null || item.getCategory().equalsIgnoreCase(category))
                .filter(item -> minPrice == null || item.getPrice() >= minPrice)
                .filter(item -> maxPrice == null || item.getPrice() <= maxPrice)
                .collect(Collectors.toList());
    }
}