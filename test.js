const originalBuffer = Buffer.from('hello this is node js');
const copiedBuffer = Buffer.alloc(originalBuffer.length);
originalBuffer.copy(copiedBuffer);
const comparisonBuffer = Buffer.from('hello this is node j');

const buffersAreIdentical = Buffer.compare(copiedBuffer, comparisonBuffer) === 0;
console.log(`The buff is identical: ${buffersAreIdentical}`);

