// takes in unused and used arrays; returns difference
function difference(unused, used) {
	// this array stores unused dice
	var un = [];
	
	// make a copy of unused array, to avoid changing it
	for (var i = 0; i < unused.length; i++) {
		un.push(unused[i]);
	}
	
	// this array stores used dice
	var u = [];
	
	// make a copy of used array, to avoid changing it
	for (var i = 0; i < used.length; i++) {
		u.push(used[i]);
	}
	
	for (i = 0; i < u.length; i++) {
		// store first index of used number in unused
		var j = un.indexOf(u[i]);
		
		// if used number is found (indexOf() returns -1 if no match is found)..
		if (j > -1) {
			// remove it from unused
			un.splice(j, 1);
		}
	}
	
	// return unused (which now only has values that aren't in used array)
	return un;
}

export default difference