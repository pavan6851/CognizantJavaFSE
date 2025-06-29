package Singleton;

public class Singleton {

    private Singleton() {
        System.out.println("week1.Singleton instance created!");
    }


    private static class SingletonHelper {
        private static final Singleton INSTANCE = new Singleton();
    }


    public static Singleton getInstance() {
        return SingletonHelper.INSTANCE;
    }


    public void showMessage() {
        System.out.println("Hello from week1.Singleton!");
    }
}
