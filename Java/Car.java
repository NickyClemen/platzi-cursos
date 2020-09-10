class Car {

    private int id;
    private String license;
    private Account driver;
    private int passenger;

    public Car(String license, Account driver){

        this.license = license;

        this.driver = driver;

        System.out.println(passenger);

        /* THIS permite diferenciar una variable de un valor identíco, y hace una llamada al objeto, permitiendo acceder a todos
        sus atributos. */ 

    } // En los () van los parámetros obligatorios.

    void printDataCar(){

        if(passenger != 0){

            System.out.println("License: " + license + ". Name driver: " + driver.name + ". Passengers: " + passenger +  ".");

        }


    }

    public Integers getPassenger(){

        return passenger;

    }

    public void setPassenger(Integer passenger){

        if(passenger == 4){
            
            this.passenger = passenger;
        
        } else {

            System.out.println("Necesitás asignar cuatro pasajeros.");

        }
        

    } // VOID no retorna valores.

	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}

	/**
	 * @return the license
	 */
	public String getLicense() {
		return license;
	}

	/**
	 * @param license the license to set
	 */
	public void setLicense(String license) {
		this.license = license;
	}

	/**
	 * @return the driver
	 */
	public Account getDriver() {
		return driver;
	}

	/**
	 * @param driver the driver to set
	 */
	public void setDriver(Account driver) {
		this.driver = driver;
	}

}