// console.log('worker started !!!');
console.log('----!-------------- worker ----------!-----------');

// self.addEventListener('message', (event) => { // lint - ошибку выдавал 
this.addEventListener('message', (event) => {
  console.log('worker recieved a message: ' + event.data);
});