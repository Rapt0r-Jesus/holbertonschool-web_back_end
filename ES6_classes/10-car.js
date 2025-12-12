export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    // Use the current instance's constructor to create a new instance with the same attributes
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
