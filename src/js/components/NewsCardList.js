export class NewsCardList {
  constructor(domElem, array) {
    this.domElem = domElem;
    this.array = array;
  }
  _addCard(card) {
    this.domElem.appendChild(card);
    this.array.push(card);
  }
  render(array) {
    for (let i = 0; i < 3; i++) {
      this._addCard(array[i]);
    }
  }
  renderPlus(array, b) {
    for (let i = 3; i < b + 3; i = i + 1) {
      this.domElem.appendChild(array[i]);
    }
  }
}
