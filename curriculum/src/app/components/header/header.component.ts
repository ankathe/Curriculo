import { Component } from '@angular/core';
import {NgxTypedJsModule} from 'ngx-typed-js';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgxTypedJsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
