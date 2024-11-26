function knows(a, b, matrix) {
  return matrix[a][b];
}

function findCelebrity(n, matrix) {
  let indegree = new Array(n).fill(0);
  let outdegree = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let x = knows(i, j, matrix);
      outdegree[i] += x;
      indegree[j] += x;
    }
  }

  console.log(indegree);
  console.log(outdegree);

  for (let i = 0; i < n; i++) {
    if (indegree[i] === n - 1 && outdegree[i] === 0) {
      return i;
    }
  }

  return -1;
}
let n = 4;
let matrix = [
  [0, 0, 1, 1],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
];
let id = findCelebrity(n, matrix);
if (id === -1) {
  console.log("No celebrity");
} else {
  console.log("Celebrity ID " + id);
}
