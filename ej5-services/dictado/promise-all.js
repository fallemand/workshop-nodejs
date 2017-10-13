// Ejemplo funciones asíncronas
// ----------------------------------------
const request1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve('end p1');
    }, 1000);
  });
};

const request2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve('end p2');
    }, 1200);
  });
};

const request3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve('end p3');
    }, 500);
  });
};

const request4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve('end p4');
    }, 2000);
  });
};

// Ejecutarlas secuencialmente
// ----------------------------------------
console.time('sequential');
request1().then((data1) => {
  console.log(data1);
  request2().then((data2) => {
    console.log(data2);
    request3().then((data3) => {
      console.log(data3);
      request4().then((data4) => {
        console.log(data4);
        console.timeEnd('sequential');
      })
    })
  })
});

// Ejecutarlas en paralelo
// ----------------------------------------
// console.time('pararel');
// Promise.all([request1(), request2(), request3(), request4()]).then((data) => {
//   console.log(data);
//   console.timeEnd('pararel');
// });
