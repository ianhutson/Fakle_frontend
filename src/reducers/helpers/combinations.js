import containsAll from './containsAll'

function combinations(array) {
	// this array stores unused dice
	var unused = [];
	
	// make a copy of array, to avoid changing it (theseKeepers and thisRoll are global variables)
	for (var i = 0; i < array.length; i++) {
		unused.push(array[i]);
	}
	
	// store number of dice in array
	var l = unused.length;
	console.log(l)
	// stores score to return (in case of multiple combinations)
	var state = {score:0,
		extra: []};
	
	// if there are 6..
	if (l == 6) {
		// check for six of a kind
		for (var x = 1; x <= 6; x++) {
			var contains = containsAll([x,x,x,x,x,x], unused);

			// retrieve result from structured array
			if (contains.result == true) {
				// return score and empty array
				return state.score += 600
				;
			}           
		}
		
		// check for a straight
		var contains = containsAll([1,2,3,4,5,6], unused);

		// retrieve result from structured array
		if (contains.result == true) {
			// return score and empty array
			return state.score += 150
			;
		}
		
		// check for 2 three of a kinds
		for (var x = 1; x <= 6; x++) {
			for (var y = 1; y <= 6; y++) {
				var contains = containsAll([x,x,x,y,y,y], unused);
				
				// retrieve result from structured array
				if (contains.result == true) {
					// return score and empty array
					return state.score += 200
				}
			}
		}
		
		// check for a full house
		for (var x = 1; x <= 6; x++) {
			for (var y = 1; y <= 6; y++) {
				var contains = containsAll([x,x,y,y,y,y], unused);
				
				// retrieve result from structured array
				if (contains.result == true) {
					// return score and empty array
					return state.score += 250
				}
			}
		}
		
		// check for three pairs
		for (var x = 1; x <= 6; x++) {
			for (var y = 1; y <= 6; y++) {
				for (var z = 1; z <= 6; z++) {
					var contains = containsAll([x,x,y,y,z,z], unused);
		
					// retrieve result from structured array
					if (contains.result == true) {
						// return score and empty array
						return state.score += 150
					}
				}
			}
		}
	}
	
	// if there are five or more..
	if (l >= 5) {
		// check for five of a kind
		for (var x = 1; x <= 6; x++) {
			var contains = containsAll([x,x,x,x,x], unused);
 		
			// retrieve result from structured array
			if (contains.result == true) {
				state.score += 300;
 			
				// retrieve unused array from structured array
				unused = contains.array;
	
				// reset length
				l = unused.length;
			}
		}
	}
	
	// if there are four or more..
	if (l >= 4) {
		// check for four of a kind
		for (var x = 1; x <= 6; x++) {
			var contains = containsAll([x,x,x,x], unused);
 		
			// retrieve result from structured array
			if (contains.result == true) {
				state.score += 200;
 			
				// retrieve unused array from structured array
				unused = contains.array;
	
				// reset length
				l = unused.length;
			}
		}
	}
	
	//  if there are three or more..
	if (l >= 3) {
		// check for three of a kind
		for (var x = 1; x <= 6; x++) {
			var contains = containsAll([x,x,x], unused);
 		
			// retrieve result from structured array
			if (contains.result == true) {
				// if they are 2s, 3s, 4s, 5s, or 6s..
				if (x > 1) {
					// multiply by 100
					state.score += x * 10;
				} else { // otherwise..
					// they are 1s
					state.score += 100;
				}
 			
				// retrieve unused array from structured array
				unused = contains.array;

				// reset length
				l = unused.length;
			}
		}
	}
	
	// if there are two or more..
	if (l >= 2) {
		// check for two ones
 		var contains = containsAll([1,1], unused);
 		
 		// retrieve result from structured array
 		if (contains.result == true) {
			state.score += 20;
 			
 			// retrieve unused array from structured array
 			unused = contains.array;
	
			// reset length
			l = unused.length;
		}
	}
	
	// if there are still two or more..
	if (l >= 2) {
		// check for two fives
 		var contains = containsAll([5,5], unused);
 		
 		// retrieve result from structured array
 		if (contains.result == true) {
			state.score += 10;
 			
 			// retrieve unused array from structured array
 			unused = contains.array;
	
			// reset length
			l = unused.length;
		}
	}
	
	// if there is one or more..
 	if (l >= 1) {
 		// check for a one
 		var contains = containsAll([1], unused);
 		
 		// retrieve result from structured array
 		if (contains.result == true) {
			state.score += 10;
 			
 			// retrieve unused array from structured array
 			unused = contains.array;
	
			// reset length
			l = unused.length;
 		}
 	}
 	
	// if there is still one or more..
 	if (l >= 1) {
 		// check for a five
 		var contains = containsAll([5], unused);
 		
 		// retrieve result from structured array
 		if (contains.result == true) {
 			state.score += 5;
 			
 			// retrieve unused array from structured array
 			unused = contains.array;
	
			// reset length
			l = unused.length;
		}
 	}
 	 	// return additive score and array with unused dice
		  return state.score += 600, state.exta = unused
}


export default combinations