import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalService } from '@app/services/global.service';
import { Yeoman } from '@app/services/yeoman.service';
import { DataApiService } from '@app/services/data-api-service';

@Component({
  selector: 'app-orders',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  orderStatus:any= ["En proceso","Declinado","Completado"];
  constructor(
    public global:GlobalService,
    public yeoman:Yeoman,
    public dataApiService: DataApiService
){
  this.getAllCategories();
}
getAllCategories() {
  this.dataApiService.getAllCategory().subscribe((response) => {
    this.yeoman.categories = response;
    this.yeoman.allcategory = response;
    this.yeoman.categories = this.yeoman.categories.items;
    this.yeoman.allcategory = this.yeoman.allcategory.items;
    this.yeoman.allCategoriesSize = this.yeoman.categories.length;
  });
}
}
