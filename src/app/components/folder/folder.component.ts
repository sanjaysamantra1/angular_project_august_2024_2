
import { Component } from '@angular/core';

@Component({
  selector: 'app-folder',
  standalone: true,
  imports: [],
  templateUrl: './folder.component.html',
  styleUrl: './folder.component.css',
  inputs:['folderObj']
})
export class FolderComponent {
  folderObj: any;
  isExpanded: boolean = false;
}
