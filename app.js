function getElement(selection){
            const element = document.querySelector(selection);
            if(element !== null){
                return element;
            }
            throw new Error(`select a right ${selection} selector`);
}
class counter {
    constructor(element, value){
        this.counter = element;
        this.value = value;
        this.incBtn = element.querySelector(".increase");
        this.decBtn = element.querySelector(".decrease");
        this.resetBtn = element.querySelector(".reset");
        this.valueDOM = element.querySelector(".value");
        this.valueDOM.textContent = this.value;
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.reset = this.reset.bind(this);
        // adding addeventlisners
        this.incBtn.addEventListener("click",this.increase);
        this.decBtn.addEventListener("click",this.decrease);
        this.resetBtn.addEventListener("click", this.reset);
    }
    increase(){
        this.value ++;
        this.valueDOM.textContent = this.value;
    }
    decrease() {
        this.value--;
        this.valueDOM.textContent = this.value;
    }
    reset() {
        this.value =0;
        this.valueDOM.textContent =0;
    }
}
const firstCounter = new counter(getElement(".first-counter"),6810000);
const secondCounter = new counter(getElement(".second-counter"),100);