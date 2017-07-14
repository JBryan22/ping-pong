# _Ping Pong Numberizer_

#### _Creates a list of numbers with multiples of 3 5 and 15 replaced by words_

#### By _**Jesse Bryan**_

## Description

_This webpage takes a user inputted number and displays a list of those numbers with several rules:_

* Multiples of 3 get replaced by the word 'ping'
* Multiples of 5 get replaced by the word 'pong'
* Multiples of 15 get replaced by the word 'pingpong'

| Behavior   |      Input      |  Output |
|----------|:-------------:|------:|
| It can count up to provided number. |  2 | 1,2 |
| It can replace numbers divisible by 3 with ping. |    6   |   1, 2, ping, 4, 5, ping|
| It can replace number divisible by 5 with pong. | 6 |    1, 2, ping, 4, pong, ping |
| It can replace numbers divisible by 15 with pingpong. |  15 | 1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping, 13, 14, pingpong |
| It can provide a reversed number count. |    6   |   ping, pong, 4, ping, 2, 1|
| It appends the results to the page as list items, rather than text | 3 |  1 2 3 |
| It allows the user to input a number multiple times without it stacking up on the webpage |  3 then 5 | 1,2,ping,4,pong |
| It will only accept numbers as valid input |    Hello   |   Does not accept|


## Setup/Installation Requirements

* _Clone repository_
* _Download Bootstrap or use Bootstrap CDN_
* _Download jQuery or use jQuery CDN_

## Technologies Used

_HTML_
_CSS_
_Javascript_

### License

*MIT License*

Copyright (c) 2016 **_Jesse Bryan_**
