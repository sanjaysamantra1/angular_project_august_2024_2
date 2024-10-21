import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-material-demo',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatCardModule
  ],
  templateUrl: './material-demo.component.html',
  styleUrl: './material-demo.component.css'
})
export class MaterialDemoComponent {

}
