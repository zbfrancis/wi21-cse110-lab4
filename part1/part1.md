### Part 1

1. The program will print the last updated value of "i" (prices.length). Although "i" was defined within the scope of the for loop, the program will not throw an error because it was instantiated with keyword "var", which ignores block scope.

2. The program will print the last updated value of "discountedPrice". Although "discountedPrice" was defined within the scope of the for loop, the program will not throw an error because it was instantiated with keyword "var", which ignores block scope.

3. The program will print the last calculated value of "finalPrice" because the variable was defined within the scope of the whole function rather than just the for loop.

4. The function will return [50, 100, 150]. The function overall returns the list of prices, discounted by the percentage passed in as an argument of the function. In this example, the discount is 50%. Therefore, each price in "prices" will be halved.

5. The program will throw an error because "i" is only defined in the scope of the for loop using the keyword "let", which doesn't ignore block scope.

6. The program will throw an error because "discountedPrice" was also defined only within the scope of the for loop using the keyword "let", which doesn't ignore block scope.

7. The program will print the last calculated value of "finalPrice" because the variable was defined within the scope of the whole function rather than just the for loop.

8. The function will return [50, 100, 150]. The function overall returns the list of prices, discounted by the percentage passed in as an argument of the function. In this example, the discount is 50%. Therefore, each price in "prices" will be halved. The fact that these variables are declared by "let" rather than "var" does not affect the functionality of the program.

9. The program will throw an error because "i" is only defined in the scope of the for loop using the keyword "let", which doesn't ignore block scope.

10. The program will throw an error because "discountedPrice" was also defined only within the scope of the for loop using the keyword "const", which doesn't ignore block scope. Although since we try to change the value of "discountedPrice" after it is declared, the program will fail to even run.

11. Assuming that the program runs regardless of the fact that we try to change the value of "finalPrice", which would cause the program to fail, it will print 0.

12. Assuming that the program runs regardless of the fact that we try to change the value of a const variable, the program would return [0, 0, 0]. This is because we will be pushing "finalPrice", which was initialized to 0, to the returned array. Since "finalPrice" is immutable, it will keep pushing 0.

13. a. student.name;
    b. student['Grad Year'];
    c. student.greeting();
    d. student['Favorite Teacher'].name;
    e. student.courseLoad[0];

14. a. '32', since we are adding with a string, the 2nd number gets added by appending it to the end of the first string rather than adding it mathematically.
    b. 1, since there is no '-' operator for strings, it just subtracts the two mathematically by converting the first string to a number then doing the arithmetic.
    c. 3, null is interpreted as nothing or 0 so 3 - 0 is just 3.
    d. 3, since there is no '-' operator for strings, it just subtracts the two mathematically by converting the first string to a number then doing the arithmetic. In this case the second number is null which is just converted to 0.
    e. 4, in most languages, true, although a boolean, is interpreted as a 1. So it get converted to a number then 3 is added making it 4.
    f. 0, in most languages, false is interpreted as a 0. So that is converted to 0 then gets null added to it, which we know from before is represented as 0 as well. Therefore, we have 0 + 0 = 0.
    g. '3undefined', "3" gets the append operator called on it and it appends undefined, a keyword that designates no type. It gets converted to a literal string and appended.
    h. NaN, "3" gets converted into a number because mathematical arithmetic operator gets called on it, but undefined cannot be converted to a number value and therefore gives us an undefined result. It just gets converted to NaN.

15. a. true, '2' is converted to number 2
    b. false, this comparison is in dictionary/lexicographic order which is this case, '2' comes lexicographically after '12', meaning it would be greater and not lesser.
    c. true, the '2' is converted to the number 2 and compared.
    d. false, when using === operator, it compares the two arguments without type conversion. Without type conversion, these two terms are unequal.
    e. false, true is converted to the number 1 and then compared which doesn't equal the number 2.
    f. true, any boolean created with "value" is set to true, so in this case we have 2 booleans set to true without type conversion, so they are equal.

16. == provides type conversion for comparison whereas === doesn't.

17. 'How are you?'. In the first if statement, the true is converted to 1 and 2 does not equal 1. In the second statement the if statement converts the 2 to a boolean condition. It would be the same as setting a variable Boolean(2). This evaluates to true since 2 is a non 0 value and the code within that block is executed.

18. (See .js file)

19. [6, 8, 10] If we start from the beginning we are assigning our array parameter as [1, 2, 3] and callback function as doSomething(). We start by defining a new empty array. Then for every element in the parameter array, we push the result of the callback function, whose parameters include the current element and a function that multiplies a variable by 2, to the new array. Since the callback function is doSomething(), let's enter that code block. In this function we take a value and return the result of doSomething's callback function with the value increased by 2. Since doSomething's callback is the function where we multiply a value by 2, all we do is take the value past, the current element, add 2 to it, and then multiply it by 2. We do this for every element in the parameter array of modifyArray and push it to the new array. We end by returning that final array.

20. (See .js file)

21. The program prints 1, prints 4, starts waiting, once 0 ms pass 3 is printed (immediately), once 1000 ms have passed 2 is printed.
