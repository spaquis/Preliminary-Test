
# Preliminary test

Simple typescript project with a closestToZero function :

  

- given an array of positive and negative integers, it returns the closest number to zero

- if the closest number in input could be either negative or positive, the function returns the positive one

- if the input array is undefined or empty, the function returns 0

  

## Installation

    # Install dev dependencies
    
    yarn install

  

## Run function

    # Get The Result for [8, 5, 10] : It must return 5
    
    yarn closestToZero 8 5 10
    
    # Get The Result for [5, 4, -9, 6, -10, -1, 8]: It must return -1
    
    yarn closestToZero 5 4 -9 6 -10 -1 8
    
    # Get The Result for [8, 2, 3, -2]: It must return 2
    
    yarn closestToZero 8 2 3 -2
    
    # Get The Result for []: It must return 0
    
    yarn closestToZero

## Testing

    # Launch Test
    
    yarn test
    
    # Get code coverage (coverage generated in ./coverage/lcov-report/index.html)
    
    yarn coverage
