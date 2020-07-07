export class SearchInput {
  //------------------------------------обновление хранилища
  constructor(form) {
    this.form = form;
    this.button = this.form.querySelector("search-field__button");
  }
  checkInputValidity(input) {
    if (input.value.length === 0) {
      input.placeholder = "Нужно ввести ключевое слово";
      input.classList.add("search-field__input_valid_off");
      return false;
    }
    return true;
  }
}
