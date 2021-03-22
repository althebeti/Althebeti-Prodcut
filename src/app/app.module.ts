import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToDoProductListComponent } from './to-do-product-list/to-do-product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './to-do-product-list/add-product/add-product.component';
import { ShowProductComponent } from './to-do-product-list/show-product/show-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoProductListComponent,
    AddProductComponent,
    ShowProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
