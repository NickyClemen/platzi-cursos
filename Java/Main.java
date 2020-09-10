class Main{

    public static void main(String[] args) {

        System.out.println("Hola mundo.");

        UberX uberX = new UberX("AMQ123", new Account("Andrés Herrera", "AND123"), "Chevrolet", "Sonic");
        
        uberX.setPassenger(2);

        uberX.printDataCar();

        UberVan uberVan = new UberVan("FGH345", new Account("Andrés Herrera", "AND123"));

        uberVan.setPassenger(6);

        uberX.printDataCar();

       /*  Car car2 = new Car("QWE567", new Account("Andrea Herrera", "ANDA876"));

        car2.passenger = 3;

        car.printDataCar(); */

    }

}