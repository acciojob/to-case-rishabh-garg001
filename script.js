function toCase(text) {
  // write your code here
	let lower = text.toLowerCase()

let upper = text.toUpperCase()
if(text.length >= 1)
return lower + "-" + upper
else
  return "-"
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
