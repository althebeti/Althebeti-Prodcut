import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  @Output() addproduct = new EventEmitter();
  newproduct: string;

  constructor() { }

  ngOnInit() {}

  addNewProduct() {
    if (this.newproduct) {
      this.addproduct.emit(this.newproduct);
    }
}
}
