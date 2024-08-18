import { Component } from '@angular/core';


import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HttpClientModule,
    
   
    ProductListComponent  // Importáljuk a ProductListComponent-et
  ],
  providers: [ProductService],  // Szolgáltatások itt vannak megadva
  
})
export class AppComponent {
  // Komponens logika
}
