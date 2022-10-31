/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, 
 * write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 * 
 * 
 * For a linear search, the time complexity is O(log n)
 */

const findTarget = ( arr: number[], target: number ): number => {
    const searchKeyIndex = Math.floor( arr.length / 2 );    // middle of the array
    let start = 0;
    let end = arr.length;

    while ( start != end ) {
        const searchKey = arr[ searchKeyIndex ];
        if ( target === searchKey ) return searchKeyIndex;
        
        if ( target < searchKey ) {
            end = searchKeyIndex - 1;
        } else {
            start = searchKeyIndex + 1;
        }
    }

    return -1;
}

const arr = [ 1, 2, 3, 4, 7, 12, 67, 34 ];
const target = 12;

console.log( findTarget( arr, target ) );
