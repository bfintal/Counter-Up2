import { divideNumbers } from './index'

test( 'generate count up numbers', () => {
	const nums = divideNumbers( '100' )
	expect( nums ).toEqual( expect.arrayContaining( [ '100' ] ) )
	expect( nums[ nums.length - 1 ] ).toBe( '100' )
    expect( parseInt( nums[ nums.length - 2 ], 10 ) ).toBeLessThanOrEqual( 100 )
    expect( parseInt( nums[ nums.length - 3 ], 10 ) ).toBeLessThanOrEqual( 100 )
    expect( parseInt( nums[ nums.length - 4 ], 10 ) ).toBeLessThanOrEqual( 100 )
    expect( nums.length ).toBeGreaterThan( 2 )
    expect( parseInt( nums[ 1 ], 10 ) ).toBeLessThan( 100 )
    expect( parseInt( nums[ 1 ], 10 ) ).toBeLessThan( parseInt( nums[ 10 ], 10 ) )
    expect( parseInt( nums[ 10 ], 10 ) ).toBeLessThan( parseInt( nums[ 20 ], 10 ) )
	expect( nums[ 0 ] ).toBe( '' )
} )

test( 'generate correct commas and dots', () => {
	const nums = divideNumbers( '10,00', { duration: 16 * 2, delay: 16 } )
    expect( nums[ 0 ] ).toBe( '5,00' )
    expect( nums[ nums.length - 1 ] ).toBe( '10,00' )

	const nums2 = divideNumbers( '12,345.67', { duration: 16 * 2, delay: 16 } )
    expect( nums2[ 0 ] ).toBe( '6,172.83' )
    expect( nums2[ nums2.length - 1 ] ).toBe( '12,345.67' )

	const nums3 = divideNumbers( '12.523.345,6', { duration: 16 * 2, delay: 16 } )
    expect( nums3[ 0 ] ).toBe( '6.261.672,8' )
    expect( nums3[ nums3.length - 1 ] ).toBe( '12.523.345,6' )

	const nums4 = divideNumbers( '12..5,.23.3.45,,6', { duration: 16 * 2, delay: 16 } )
    expect( nums4[ 0 ] ).toBe( '6..2,.61.6.72,,8' )
    expect( nums4[ nums4.length - 1 ] ).toBe( '12..5,.23.3.45,,6' )
} )

test( 'support mixture of strings and numbers', () => {
	const nums = divideNumbers( 'some 1000string$20,000.00here', { duration: 16 * 2, delay: 16 } )
    expect( nums[ 0 ] ).toBe( 'some 500string$10,000.00here' )
    expect( nums[ nums.length - 1 ] ).toBe( 'some 1000string$20,000.00here' )
} )

