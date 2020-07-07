export class CommitCardList {
  constructor(domElem, array) {
    this.domElem = domElem;
    this.array = array;
  }
  _addCommitCard(card) {
    this.domElem.appendChild(card);
    this.array.push(card);
  }
  renderCommit(array) {
    array.forEach((elem) => {
      this._addCommitCard(elem);
    });
  }
}
