public class Singleton {
    // Private constructor to prevent instantiation
    private Singleton() {
        System.out.println("Singleton instance created!");
    }

    // Static inner class - inner classes are not loaded until they are referenced
    private static class SingletonHelper {
        private static final Singleton INSTANCE = new Singleton();
    }

    // Global access point to get the Singleton instance
    public static Singleton getInstance() {
        return SingletonHelper.INSTANCE;
    }

    // Example method
    public void showMessage() {
        System.out.println("Hello from Singleton!");
    }
}
