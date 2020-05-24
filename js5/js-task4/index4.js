  const matrix = [[10, 11, 12],[13, 14, 15],[16, 17, 18]];
  for (let i = 0; i < matrix.length; i += 1) {
    console.log(`${i+1}`);
    for (let a = 0; a < matrix[i].length; a += 1) {
        console.log(matrix[i][a]);
    }
}