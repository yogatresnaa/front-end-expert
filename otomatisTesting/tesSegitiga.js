const detectTriangle = (sideA, sideB, sideC) => {
  [sideA, sideB, sideC].forEach((side) => {
    if (!Number.isInteger(side)) {
      throw new Error('Sides have to be Integer');
    }
    if (side < 1) {
      throw new Error('Strange Triangle');
    }
  });

  if (sideA === sideB && sideA === sideC) {
    return 'Segitiga sama sisi';
  }

  if (sideA === sideB || sideA === sideC || sideB === sideC) {
    return 'Isosceles Triangle';
  }
};

describe('Detect the triangle', () => {
  it('Should fail if the sides are less than 1', () => {
    expect(() => detectTriangle(-1, 2, 2)).toThrowError('Strange Triangle');
    expect(() => detectTriangle(1, -2, 2)).toThrowError('Strange Triangle');
    expect(() => detectTriangle(1, 2, -2)).toThrowError('Strange Triangle');
  });
  it('Should fail if the sides are not integer', () => {
    expect(() => detectTriangle('a', 2, 2)).toThrowError('Sides have to be Integer');
    expect(() => detectTriangle(2, 'a', 2)).toThrowError('Sides have to be Integer');
    expect(() => detectTriangle(2, 2, 'b')).toThrowError('Sides have to be Integer');
  });
  it('Sebaiknya jika nilai sisanya sama makan itu adalah sgitiga sama sisi', () => {
    expect(detectTriangle(1, 1, 1)).toEqual('Segitiga sama sisi');
  });
  it('Should detect Isosceles Triangle if only two sides are equal', () => {
    expect(detectTriangle(1, 1, 2)).toEqual('Isosceles Triangle');
    expect(detectTriangle(2, 1, 2)).toEqual('Isosceles Triangle');
    expect(detectTriangle(1, 2, 1)).toEqual('Isosceles Triangle');
  });
});
