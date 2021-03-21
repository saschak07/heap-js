class Comparator{
    constructor(){
        
    }
    comparison = (a,b) =>{
        if(a===b){
            return 0
        }
        return a>b?1:-1;
    }
    greaterThan(a,b){
        return this.comparison(a,b) > 0
    }
    lessThan(a,b){
        return this.comparison(a,b) < 0
    }
    equals(a,b){
        return this.comparison(a,b) === 0
    }
}
module.exports = Comparator