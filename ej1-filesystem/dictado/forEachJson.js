const json = {
  'foo': 'bar',
  'baz': 'qux'
};

Object.keys(json).forEach((key) => {
  console.log('key: ' + key);
  console.log('value: ' + json[key]);
});
