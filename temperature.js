class Temperature{
    c;
    constructor(c) {
        this.c=c;

    }

    getTemperatureC (){
        return this.c
    }
    getTemperatureF (){
        return this.c*1.8+32;
    }
    getTemperatureKenvin(){
        return this.c+273.15;
    }
}