import {observable, action} from 'mobx'

class Store {
  @observable Barcode = "";

  @action scanCompleted(Number) {
    this.Barcode = Number
  }
}

export default new Store();
