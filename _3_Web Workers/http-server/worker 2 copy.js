// console.log('worker started !!!');
console.log('------------------ worker ---------------------');

// self.addEventListener('message', (event) => { // lint - ошибку выдавал 
// this.addEventListener('message', (event) => {
self.addEventListener('message', (event) => {
  console.log('worker recieved a message: ' + event.data);
  let z;
        for (let i = 0; i < 1000000000; i += 1) {
          z = i * 2;
        }
  console.log(z);

  self.postMessage(z);
});