var katzDeli = [];
var customer = 0;

function takeANumber(katzDeliLine) {
  katzDeliLine.push(customer++);
  return "Welcome, you are number " + ;
}

function nowServing(katzDeliLine) {
  var zeroGreeting = "There is nobody waiting to be served!";
  var nextGreeting = "Currently serving " + katzDeliLine[0] + ".";
  
  while(katzDeliLine.length > 0) {
    katzDeliLine.shift(1);
    return nextGreeting;
  }
  while(katzDeliLine.length === 0) {
    return zeroGreeting;
  }
}


function currentLine(katzDeliLine) {
  var currentLine = [];
  var lineLength = katzDeliLine.length;
  var x = 1;
  for (let i=0; i<lineLength; i++) {
    currentLine.push(" " + `${x}` + ". " + katzDeliLine[`${i}`]);
    x++;  
  }
  
  var theresALine = "The line is currently:" + [currentLine];
  var emptyLine = "The line is currently empty.";
  
  if(katzDeliLine.length === 0) {
    return emptyLine;
  } else {
    return theresALine;
  }
}