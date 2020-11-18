# Javascript
**Contents**
- [node CLI](#node-cli)
- [forEach](#array.foreach())
- [map](#array.map())
- [filter](#array.filter())
- [reduce](#array.reduce())
---
### node CLI
```
> .help
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the repl
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file

Press ^C to abort current expression, ^D to exit the repl
>
```
---
### Array.forEach()
~ Method to iterate through an array.
```js
let things = ['thing1', 'thing2', 'thing3'];

things.forEach(thing => console.log(thing));
```
*output*
```
thing1
thing2
thing3
undefined
>        
```
**Built-in Variables**
*~~ they are positional ~~*
```js
things.forEach((ele, i, array) => {
    console.log(ele);
    console.log(i);
    console.log(array);
    console.log('---');
});
```
*output*
```
thing1
0
[ 'thing1', 'thing2', 'thing3' ]
---
thing2
1
[ 'thing1', 'thing2', 'thing3' ]
---
thing3
2
[ 'thing1', 'thing2', 'thing3' ]
---
undefined
> 
```
---
### Array.map()
~ Method to alter each element of an array.
```js
let things = ['thing1', 'thing2', 'thing3'];

things.map(thing => thing.toUpperCase());
```
*output*
```
[ 'THING1', 'THING2', 'THING3' ]
```
---
### Array.filter()
~ Method to select elements from an iteration of an array.
*does not change argument array*
```js
let things = ['thing1', 'thing2', 'thing3'];

things.filter(thing => thing.includes('2'));
```
*output*
```
[ 'thing2' ]
```
---
### Array.reduce()
~ Method to remove elements out of an array.

*```accum``` defaults to first element.*
*```el``` defaults to second element.*
*```0``` in this example is representing the assigned default for ```accum```*

```js
let nums = [3, 7, 5, 9];

nums.reduce((accum, el) => (accum + el), 0);
```
*output*
```
24
``` 