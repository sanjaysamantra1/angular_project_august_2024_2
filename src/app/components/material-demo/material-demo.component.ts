import { Component, inject } from '@angular/core';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import { HomeComponent } from '../home/home.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { CareersComponent } from '../careers/careers.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { columnsInfo, ELEMENT_DATA } from './table_data';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { ExampleFlatNode, FOOD_DATA, FoodNode } from './tree_view_data';
import { FlatTreeControl } from '@angular/cdk/tree';

@Component({
  selector: 'app-material-demo',
  standalone: true,
  imports: [
    HomeComponent,
    AboutusComponent,
    CareersComponent,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    MatTreeModule,
    MatIconModule
  ],
  templateUrl: './material-demo.component.html',
  styleUrl: './material-demo.component.css'
})
export class MaterialDemoComponent {
  readonly dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openSnackBar() {
    let snackBarRef = this.snackBar.open('Hello World!!!', 'close',
      {
        duration: 3000
      }
    );
  }

  // table code
  columns = columnsInfo;
  dataSource = ELEMENT_DATA;
  displayedColumns = this.columns.map(c => c.columnDef);

  // tree view code
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );
  treeViewDataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  constructor() {
    this.treeViewDataSource.data = FOOD_DATA;
  }
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

} 
