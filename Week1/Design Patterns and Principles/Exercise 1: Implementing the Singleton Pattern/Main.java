package Singleton;

public class Main {
    public static void main(String[] args) {

        Singleton s1 = Singleton.getInstance();
        s1.showMessage();

        Singleton s2 = Singleton.getInstance();


        if (s1 == s2) {
            System.out.println("Both instances are the same (week1.Singleton works).");
        } else {
            System.out.println("Different instances (week1.Singleton failed).");
        }
    }
}
