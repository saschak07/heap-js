const Comparator = require('./comparator')

class Heap {
    constructor(){
        if(new.target === Heap){
            throw Error('cannot directly intantiate a Heap, '+
            'should be a min heap or max heap')
        }
        this.compare = new Comparator()
        this.heapContent = []
    }

    getParentIndex(index){
        return Math.floor((index-1)/2)
    }
    getLeftChildIndex(index){
        return index*2+1
    }
    getRightChildIndex(index){
        return index*2+2
    }
    hasParent(index){
        return this.getParentIndex(index) >= 0
    }
    hasLeftChild(index){
        return this.getLeftChildIndex(index) < this.heapContent.length
    }
    hasRightChild(index){
        return this.getParentIndex(index) < this.heapContent.length
    }
    swap(firstIndex,secondIndex){
        let temp = this.heapContent[firstIndex]
        this.heapContent[firstIndex] = this.heapContent[secondIndex]
        this.heapContent[secondIndex] = temp
    }
    heapifyUp(fromIndex){
        let currentIndex = fromIndex || this.heapContent.length-1
        while(this.hasParent(currentIndex) && 
        this.outOfOrder(currentIndex,this.getParentIndex(currentIndex))){
            this.swap(currentIndex,this.getParentIndex(currentIndex))
            currentIndex = this.getParentIndex(currentIndex)
        }
    }
    heapifyDown(fromIndex){
        let currentIndex = fromIndex || 0

        while(this.hasLeftChild(currentIndex) || this.hasRightChild(currentIndex)){
            if(this.outOfOrder(this.getLeftChildIndex(currentIndex),currentIndex)){
                this.swap(currentIndex,this.getLeftChildIndex(currentIndex))
                
                
            }
            if(this.outOfOrder(this.getRightChildIndex(currentIndex),currentIndex)){
                this.swap(currentIndex,this.getRightChildIndex(currentIndex))
                
                
            }
            if(this.hasLeftChild(currentIndex)){
                currentIndex = this.getLeftChildIndex(currentIndex)
            }
            else if(this.hasRightChild){
                currentIndex = this.getRightChildIndex(currentIndex)
            }
            else{
                break;
            }
        }
    }
    add(value){
        this.heapContent.push(value)
        this.heapifyUp()
    }

    outOfOrder(firstIndex, secondIndex){
        return true;
    }
    peek(){
        if(this.heapContent.length===0){
            return null
        }
        return this.heapContent[0]
    }
    poll(){
        if(this.heapContent.length===0){
            return null
        }
        let root = this.heapContent[0]
        let last = this.heapContent.length-1
        this.swap(0,last)
        this.heapContent.pop()
        this.heapifyDown()
        return root
    }
    toString(){
        return this.heapContent.map(data => `${data}`)
    }
}
module.exports = Heap