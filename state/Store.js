import {observable, action} from 'mobx'

class Store {
  @observable Barcode = "";

  @action scanCompleted(Number) {
    this.Barcode = Number
    console.log(this.Barcode)
  }
}

export default new Store();
