import { divideNumbers } from './index'

test( 'divideNumbers', () => {
    const nums = divideNumbers( '100' )
    expect( nums ).toEqual( expect.arrayContaining( [ '100' ] ) )
    expect( nums[ nums.length - 1 ] ).toBe( '100' )
    expect( nums[ 0 ] ).toBe( '' )
} )
  