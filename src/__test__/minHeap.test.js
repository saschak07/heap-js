const { test, expect } = require('@jest/globals')
const MinHeap = require('../Heap/MinHeap')
test('adding elements to heap',()=> {
    const minHeap = new MinHeap()
    let data = [4,10,2,9,8,1]
    data.forEach(number => minHeap.add(number))
    expect(minHeap.peek()).toBe(1)
})
test('testing poll',() => {
    const minHeap = new MinHeap()
    let data = [4,10,2,9,8,1]
    data.forEach(number => minHeap.add(number))
    expect(minHeap.poll()).toBe(1)
    expect(minHeap.peek()).toBe(2)
    expect(minHeap.poll()).toBe(2)
    expect(minHeap.peek()).toBe(4)
})