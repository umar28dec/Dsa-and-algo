waterfall(
  [
    function (callback) {
      setTimeout(function () {
        console.log("FIRST");
        callback(null, "b");
      }, 100);
    },
    function (param, callback) {
      setTimeout(function () {
        console.log("SECOND", param);
        callback(null, "c", "d");
      }, 50);
    },
    function (param1, param2, callback) {
      setTimeout(function () {
        console.log("THIRD", param1, param2);
        callback(null, "e");
      }, 10);
    },
  ],
  function (err, result) {
    console.log("err", err);
    console.log("result", result);
  }
);
function waterfall(arr, finalCallback) {
  let first = arr[0];
  let second = arr[1];
  let third = arr[2];

  first((err, params1) => {
    second(params1, (err, param1, param2) => {
      third(param1, param2, (err, data) => {
        finalCallback(err, data);
      });
    });
  });
}
