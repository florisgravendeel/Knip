var treatments = [];
class Treatment {

    constructor(id, name, price, duration) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.duration = duration
    }
    static getTreatmentsNameList(){
        let list = []
        for (i=0; i < treatments.length; i++){
            list.push(treatments[i].name)
        }
        return list
    }
}