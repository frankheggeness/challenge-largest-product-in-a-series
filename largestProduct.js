class LargestProduct {
  constructor(number) {
    this.getLargestProduct = function() {
      let product = 0;
      let arr = number
        .toString(10)
        .split('')
        .map(Number);

      for (let i = 0; i < arr.length; i++) {
        let newProduct = arr[i] * arr[i + 1] * arr[i + 2] * arr[i + 3] * arr[i + 4];
        if (newProduct > product) {
          product = newProduct;
        }
      }

      return product;
    };

    this.getLargestProductPosition = function() {
      let product = 0;
      let index = 0;
      let arr = number
        .toString(10)
        .split('')
        .map(Number);

      for (let i = 0; i < arr.length; i++) {
        let newProduct = arr[i] * arr[i + 1] * arr[i + 2] * arr[i + 3] * arr[i + 4];
        if (newProduct >= product) {
          product = newProduct;
          index = i;
        }
      }

      return index;
    };
  }
}

module.exports = LargestProduct;
