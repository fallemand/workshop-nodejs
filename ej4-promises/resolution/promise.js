let primeraPromise = (text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (text === 'texto') {
        resolve('Promise resuelta');
      } else {
        reject(new Error('Promise rechazada'));
      }
    }, 2000);
  })
}

primeraPromise('texto').then(response => {
  console.log(response);
});


console.log('Esto se ejecuta antes');
