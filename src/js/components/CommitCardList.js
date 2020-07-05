export class CommitCardlist {
    constructor(domelem, array) {
      this.domelem = domelem;
      this.array = array;
    }
    _addCommitCard(card) {
      this.domelem.appendChild(card);
      this.array.push(card);
    }
    renderCommit(array) {
      array.forEach((elem) => {
        this._addCommitCard(elem);
      });
    }
  }