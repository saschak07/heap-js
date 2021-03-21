const Heap = require('./Heap')
class MinHeap extends Heap{
    outOfOrder(childIndex,parentIndex){
        if(this.compare.greaterThan(this.heapContent[parentIndex],
            this.heapContent[childIndex])){
            return true
        }
        return false
    }
}
module.exports = MinHeap