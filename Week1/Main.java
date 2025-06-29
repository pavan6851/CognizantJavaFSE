public class Main {
    public static void main(String[] args) {
        // Access Singleton instance
        Singleton s1 = Singleton.getInstance();
        s1.showMessage();

        // Get another reference
        Singleton s2 = Singleton.getInstance();

        // Verify both are the same instance
        if (s1 == s2) {
            System.out.println("Both instances are the same (Singleton works).");
        } else {
            System.out.println("Different instances (Singleton failed).");
        }
    }
}
