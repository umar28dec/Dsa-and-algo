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
function waterfall(tasks, finalCallback) {
  const executeTask = (index, ...args) => {
    if (index >= tasks.length) {
      return finalCallback(...args);
    }
    const currentTask = tasks[index];
    currentTask(...args, (err, ...results) => {
      if (err) {
        return finalCallback(err);
      }
      executeTask(index + 1, ...results);
    });
  };
  executeTask(0);
}
