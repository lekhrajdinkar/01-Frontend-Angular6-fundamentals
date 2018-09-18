> ### A. Features
1. browser only understans JS, hence JS cant be replaced with any other language.
2. `TS` > tsc, compiles to > `JS` > then runs on browser.
3. install TS module : `npm install typescript -g`
4. created by microsoft.

> ### B. TS vs JS

** 1. Can write JS in TS. TS also ES6 **
![](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ts-1.jpg)
** 2. Var and Array **
![](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ts-2.jpg)
** 3. Tuple **

** 4. Function arguments **
>JS - fn(a,b,c)
>TS - fn(a: number, b: number, c : string) : number 

** 5. constructor **
- can declare class feilds in contructor  itself using access specfier before feild name.

** 6. TS support OOPS **

** 7. TS support Enum and generics **


***

> ### C. Problem with JS
1. Lack of type.
2. technically we write object but it does not like in java. eg.
3. no OOPS concept.
4. Function argument issue. eg : function is deifned with 2 argu, but we can pass any number of argu.


> ### D. TS Compiler

**Commands**
1. tsc abc.ts --out ../../abc.js
2. tsc abc.ts --watch
3. tsc --help
4. tsc --init : generate tsconfig.json file with default compiler options.

**Configure tsconfig.json**
1. strict - T : force typing
2. target - es5,etc
3. outfile - ./
etc.

> ### E. Create TS project (npm project)

1. Install Node js and npm, they provide running env for TS.
2. go to project folder, hit `npm --init` : it will create `package.json`
main:'index.html' --> starting point of node application.
scripts: {... , start : {enter your command} , ... } --> 

npm start --> it will then run corresponding command.
eg: command is `tsc && out/abc.js` --> compile ts and run js file

***
> ### H. Typescript Libraries
> ** 1. lodash - collection **
- install : `npm install @type/lodash --save --dev` (develop dependencies)
- eg : 

    import * as foo from 'lodash'
    var v = [2,3,4,5];
    foo.`reverse(v)`;


> ** 2. request - REST call **
- install : `npm install @type/request --save --dev` (develop dependencies)