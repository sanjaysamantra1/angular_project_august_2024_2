import { Component } from '@angular/core';
import { FolderComponent } from '../folder/folder.component';
import { folderData } from './folder_data';

@Component({
  selector: 'app-folder-explorer',
  standalone: true,
  imports: [FolderComponent],
  templateUrl: './folder-explorer.component.html',
  styleUrl: './folder-explorer.component.css'
})
export class FolderExplorerComponent {
  folderData = folderData;
}
