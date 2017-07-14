specs:

1. It can count up to provided number.
  input: 2
  output: 1, 2
2. It can replace numbers divisible by 3 with ping.
  input: 6
  output: 1, 2, ping, 4, 5, ping
3. It can replace number divisible by 5 with pong.
  input: 6
  output: 1, 2, ping, 4, pong, ping
4. It can replace numbers divisible by 15 with pingpong.
  input: 15
  output: 1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping, 13, 14, pingpong
5. It can provide a reversed number count.
  input: 6
  output: ping, pong, 4, ping, 2, 1
6. It appends the results to the page as list items, rather than text
  input: 3
  output:
    * 1
    * 2
    * ping
7. It allows the user to input a number multiple times without it stacking up on the webpage
  input: 3 then 5
  output: 1,2,ping,4,pong
6. It will only accept numbers as valid input
  input: "Hello"
  output: "Please Enter a Number" or not possible
