export class RemoveCard {
  constructor(container) {
    this.container = container;
  }
  remove() {
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }
  }
}
