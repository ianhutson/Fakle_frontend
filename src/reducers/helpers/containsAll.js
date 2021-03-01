import difference from './difference'

// takes in score combination and unused array; determines whether combination exists in unused array
function containsAll(combination, unused) {
	// l is defined up front for speed
	var l = combination.length;
	
	// stores unused dice
	var un = [];
	
	// make a copy of unused array, to avoid changing it
	for (var i = 0; i < unused.length; i++) {
		un.push(unused[i]);
	}
	
	// this array stores used dice
	var used = [];
	
	for (var i = 0; i < l; i++)  {
		// store index of combination die in unused array
		var c = un.indexOf(combination[i]);
		
		// if unused doesn't contain this combination die..
		if (c == -1) {
			return false;
		} else { // otherwise..
			// add die to used array
			used.push(un[c]);
			
			// remove die from unused (since most combinations contain multiples)
  			un.splice(c,1);
		}
	}
	
	// take out scored dice
	unused = difference(unused, used);
	
	// score combination exists in array; return true and unused array
	return {
		result: true,
		array: unused
	};
}

export default containsAll

