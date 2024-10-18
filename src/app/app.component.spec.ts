import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular_project_august_2024_2' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular_project_august_2024_2');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('This is App component');
  });
  it('should test addition function', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.addResult).toBeDefined();
    app.addition(10, 20)
    expect(app.addResult).toBe(30);
    app.addition(-2, -3)
    expect(app.addResult).toBe(-5);
    app.addition(-2, 3)
    expect(app.addResult).toBe(1);
  });
  it('should test multiplication function', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.multiplication(4, 5)).toBe(20);
  })
  it('should test isEven function', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.isEven(4)).toBe('even');
    expect(app.isEven(5)).not.toBe('even');
    expect(app.isEven(7)).toBe('odd');
    expect(app.isEven(8)).not.toBe('odd');
  })
  it('should test addNewCar function', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.cars).toBeDefined();
    expect(app.cars.length).toBe(2);
    expect(app.cars).toEqual(['Tata', 'Honda']);
    expect(app.cars).toContain('Tata')
    expect(app.cars).not.toContain('BMW');
    app.addNewCar('Maruti');
    expect(app.cars.length).not.toBe(2);
    expect(app.cars.length).toBe(3);
    expect(app.cars).toEqual(['Tata', 'Honda', 'Maruti']);
    expect(app.cars).toContain('Maruti')
    expect(app.cars).not.toContain('BMW');
  })
});
