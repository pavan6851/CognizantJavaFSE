package Ecommerce;

// Product Interface
interface Search {
    void search(String query);
}

// Concrete Products
class NameSearch implements Search {
    public void search(String query) {
        System.out.println("Searching by Product Name: " + query);
    }
}

class CategorySearch implements Search {
    public void search(String query) {
        System.out.println("Searching by Category: " + query);
    }
}

class BrandSearch implements Search {
    public void search(String query) {
        System.out.println("Searching by Brand: " + query);
    }
}

// Factory Class
class SearchFactory {
    public Search getSearchType(String type) {
        if (type == null) return null;
        if (type.equalsIgnoreCase("NAME")) {
            return new NameSearch();
        } else if (type.equalsIgnoreCase("CATEGORY")) {
            return new CategorySearch();
        } else if (type.equalsIgnoreCase("BRAND")) {
            return new BrandSearch();
        }
        return null;
    }
}

// Main Class
public class Ecommerce {
    public static void main(String[] args) {
        SearchFactory factory = new SearchFactory();

        Search nameSearch = factory.getSearchType("NAME");
        nameSearch.search("Laptop");

        Search categorySearch = factory.getSearchType("CATEGORY");
        categorySearch.search("Electronics");

        Search brandSearch = factory.getSearchType("BRAND");
        brandSearch.search("Apple");
    }
}

