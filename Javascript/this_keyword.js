const student = {
    name: "Chandan",
    age: 20,
    city: "Azamgarh",
    eng: 96,
    math: 86,
    phy: 92,

    getAvg() {
        console.log(this);
        
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(avg);
    }
    
}

//function getAvg() {
 //   console.log(this);
//}