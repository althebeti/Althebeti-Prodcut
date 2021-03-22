import { Component, Input,Output, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss']
})
export class ShowProductComponent implements OnInit {

  @Input() product;
  @Output() add = new EventEmitter();
  @Output() delete = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }

  addProduct(){
    this.add.emit(this.product.id);
  }

  removeProduct(){
    this.delete.emit(this.product.id);
   }
 

}
