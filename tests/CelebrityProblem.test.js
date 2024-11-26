const CelebrityProblem = require("../algo/celebrity");

describe("CelebrityProblem", () => {
  test("should return the correct celebrity index", () => {
    // Test case 1: Basic example with a known celebrity (person 2 is the celebrity)
    const matrix1 = [
      [0, 1, 1],
      [0, 0, 1],
      [0, 0, 0],
    ];
    const celebrityProblem1 = new CelebrityProblem(3, matrix1);
    expect(celebrityProblem1.findCelebrity()).toBe(2);

    // Test case 2: No celebrity in the matrix
    const matrix2 = [
      [0, 1, 0],
      [0, 0, 1],
      [1, 0, 0],
    ];
    const celebrityProblem2 = new CelebrityProblem(3, matrix2);
    expect(celebrityProblem2.findCelebrity()).toBe(-1);

    // Test case 3: Larger matrix with a known celebrity (person 0 is the celebrity)
    const matrix3 = [
      [0, 0, 0, 0],
      [1, 0, 1, 1],
      [1, 1, 0, 1],
      [1, 0, 1, 0],
    ];
    const celebrityProblem3 = new CelebrityProblem(4, matrix3);
    expect(celebrityProblem3.findCelebrity()).toBe(0);

    // Test case 4: Matrix with all zeros (no one knows anyone)
    const matrix4 = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    const celebrityProblem4 = new CelebrityProblem(3, matrix4);
    expect(celebrityProblem4.findCelebrity()).toBe(-1);

    // Test case 5: Matrix where everyone knows the same person (person 1 is the celebrity)
    const matrix5 = [
      [0, 1, 1],
      [0, 0, 1],
      [0, 1, 0],
    ];
    const celebrityProblem5 = new CelebrityProblem(3, matrix5);
    expect(celebrityProblem5.findCelebrity()).toBe(-1);
  });
});
