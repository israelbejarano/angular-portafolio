import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoCompleto } from 'src/app/interfaces/producto-completo.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  producto: ProductoCompleto;
  id: string;

  constructor(private route: ActivatedRoute, public productosService: ProductosService) { }

  ngOnInit() {
    this.route.params.subscribe(parametros => {
      console.log(parametros);
      this.productosService.getProducto(parametros['id']).subscribe((producto: ProductoCompleto) => {
        console.log(producto);
        this.producto = producto;
        this.id = parametros['id'];
      });
    });
  }

}
