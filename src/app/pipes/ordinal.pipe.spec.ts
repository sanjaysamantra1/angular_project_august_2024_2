import { OrdinalPipe } from "./ordinal.pipe";

describe('Testing Ordinal Pipe', () => {
  let pipe: any;

  beforeAll(() => { // 1
    console.log('I am before all')
  })
  beforeEach(() => {  // n
    console.log('I am before each');
    pipe = new OrdinalPipe();
  })
  afterEach(() => {  // n
    console.log('I am after each')
  })
  afterAll(() => {  // 1
    console.log('I am After all')
  })

  it('Should Create Pipe Instance', () => {
    // const pipe = new OrdinalPipe();
    expect(pipe).toBeTruthy();
    console.log('It-1')
  });
  it('Should test transform Pipe Instance', () => {
    console.log('It-2')
    // const pipe = new OrdinalPipe();
    expect(pipe.transform(NaN)).toBe('NaN');
    expect(pipe.transform(21)).toBe('21st')
    expect(pipe.transform(22)).toBe('22nd')
    expect(pipe.transform(23)).toBe('23rd')
    expect(pipe.transform(24)).toBe('24th')
  });

  it('Should test transform Pipe Instance', () => {
    console.log('It-3');
  });

})