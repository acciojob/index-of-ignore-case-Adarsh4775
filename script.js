function indexOfIgnoreCase(s1, s2) {
  // write your code here

	let str = s1.toLowerCase();
	let subStr = s2.toLowerCase();
	
	for(i=0; i<str.length; i++)
		{
			let currSubStr = str.slice(i, i + subStr.length);

			if(currSubStr === subStr)
			{
				return i;  
			}
		}
	return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
