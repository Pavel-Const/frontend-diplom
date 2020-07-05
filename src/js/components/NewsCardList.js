export class NewsCardlist {
  constructor(domelem, array) {
    this.domelem = domelem;
    this.array = array;

  }
  _addCard(card) {
    this.domelem.appendChild(card);
    this.array.push(card);
  }
  render(array) {
    for(let i = 0; i<3; i++){
      this._addCard(array[i])
    }
  }
  renderPlus(array, b) {
    for(let i = 3; i<b+3; i=i+1){
      this.domelem.appendChild(array[i]);
    }
  }
}
