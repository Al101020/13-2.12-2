// // console.log('Worker started');

// // // self.addEventListener('message', (event) => { // lint - ошибку выдавал
// // this.addEventListener('message', (event) => {
// //   console.log(`worker recieved a message - работник получил сообщение - ${event.data}`);

// //   console.log('start - долгих расчётов');
// //   let z;
// //   for (let i = 0; i < 10000000000; i += 1) {
// //     z = i * 2;
// //   }
// //   console.log(z);
// //   // this.postMessage(z); // return z;
// //   self.postMessage(z);// а здесь работает и self, и this.
// // });

// // --- Работает ---

// // // теперь манипуляции с файлами
// // this.addEventListener('message', (event) => {
// //   console.log(`worker recieved a message - работник получил сообщение`);

// //   console.log(event.data);
// // });

// // ---
// // importScripts('./node_modules/jszip/dist/jszip.min.js');
// // jszip.js

// // import JSZip from './node_modules/jszip/dist/jszip.js';
// // вне модуля нельзя использовть import
// importScripts('../node_modules/jszip/dist/jszip.js');

// this.addEventListener('message', (event) => {
//   // const zip = new JSZip();
//   const zip = new JSZip();
//   console.log(zip);
//   console.log('worker recieved a message - работник получил сообщение');

//   console.log(event.data);

//   const fileName = event.data.name;

//   const reader = new FileReader();

//   reader.addEventListener('load', (e) => {
//     const content = e.target.result;

//     zip.file(fileName, content);

//     zip.generateAsync({ type: 'blob' }).then((zipcontent) => {
//       console.log(zipcontent);

//       // self.postMessage(zipcontent);
//       this.postMessage(zipcontent);
//     });
//   });

//   reader.readAsBinaryString(event.data);

//   // смотреть не хотим, хотим архивировать
//   // let extension = (event.data.name).slice((event.data.name).lastIndexOf('.') + 1);
//   // расширение
//   // console.log(extension);

//   // if (extension === 'png') {
//   //   reader.readAsDataURL(event.data);
//   // } else if (extension === 'txt' || extension === 'json') {

//   //   reader.readAsText(event.data);
//   // }  else {
//   //   // console.log();
//   //   console.log('не знаю что за разрешение - ' + extension);
//   // }
// });
