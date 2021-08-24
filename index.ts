type VectorOneDimension = Array<number>;
type VectorTwoDimension = Array<VectorOneDimension>;
type VectorThreeDimension = Array<VectorTwoDimension>
interface MatrixType {
  matrix: VectorThreeDimension;
}
class Matrix implements MatrixType {
  matrix: VectorThreeDimension;
  rows: number; 
  cols: number;
  dimension: number;
  constructor(matrix) {
    this.matrix = matrix;
  }
  dotMultiplication(matrix) {
    
  }
  crossProduct(matrix) {}

}