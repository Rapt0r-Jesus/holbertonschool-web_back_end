export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    // Check if the extending class has overridden evacuationWarningMessage
    if (this.constructor !== Building && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Abstract method
  evacuationWarningMessage() {
    throw new Error('Method must be implemented by subclass');
  }
}
