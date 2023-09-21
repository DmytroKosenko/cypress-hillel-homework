const re1 = new RegExp("hey");

const re2 = /hey/;

re1.test("hey"); //true
re1.test("blablab hey blabal"); //true
re1.test("he"); //false
re1.test("lbalalb"); //false

//find from start
/^hey/.test("hey"); //true
/^hey/.test("blahey"); //false

//find from end
/hey$/.test("bla hey"); //true
/hey$/.test("hey bla"); //false

//from start to end
/^hey$/.test("hey"); //true
