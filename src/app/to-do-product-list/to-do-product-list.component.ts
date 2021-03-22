import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';


@Component({
  selector: 'app-to-do-product-list',
  templateUrl: './to-do-product-list.component.html',
  styleUrls: ['./to-do-product-list.component.scss']
})
export class ToDoProductListComponent implements OnInit {

  productList: any[];

  constructor(private ProductService: ProductService) {}

  ngOnInit(): void {
    this.getAllproductList();
  }

  getAllproductList() {
    this.productList = [];
    this.ProductService.getAllproduct().subscribe((productList: []) => {
      this.productList = productList;
    });
  }


  addProduct(addNewProduct) {
    this.productList.push({
      id: this.productList.length + 1,
      name: addNewProduct,
      done: false,
    });
  }

  deleteProduct(productId) {
    this.productList = this.productList.filter((product) => product["id"] != productId);
  }

}
