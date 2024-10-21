import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderExplorerComponent } from './folder-explorer.component';

describe('FolderExplorerComponent', () => {
  let component: FolderExplorerComponent;
  let fixture: ComponentFixture<FolderExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolderExplorerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
