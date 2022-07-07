# Bad smell examples and solutions
example 1

1 - strange names

dist, d (variables)
calc (method)

rename variables
rename methods
rename files
rename classes
rename folders

2 - magic numbers

22, 3.90, 2.9, 2.10, 0, 10

extract constants

3 - comments

// calculate ride
// overnight
// sunday

introduce explanatory variables
extract methods
delete comments

4 - dead code

// console.log(dist, d);

delete commented code

5 - blank lines

delete rows in bank

6 - strange returns

return -1;

replace error code with exception
replace error code with result object

7 - confusing conditions

remove conditions nested by guard clauses
consolidate conditional expression
introduce ternary

8 - long method

extract method

9 - lack of exception handling

handle exceptions properly
don't silence exceptions
include information for treatment

10 - long list of parameters

introduce parameter object
extract class and move method with many parameters to it

11 - large classes

extract class
move method

example 2

1 - blank space

remove the spaces

2 - comments

remove comments

3 - complex ifs

consolidate conditions
introduce guard clauses
replace if with ternary
extract conditions for explanatory functions or variables

4 - indentation error

correct indentation

5 - variables declared together

ungroup variables

6 - variable declared far from its use

move variables to the most suitable location

7 - confusing algorithm

replace algorithm
