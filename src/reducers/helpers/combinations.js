function combinations(arr) {
  let	tempScore = 0;
	let ones = [];
	let twos = [];
	let threes = [];
	let fours = [];
	let fives = [];
	let sixes = [];
	let scoreArray = [];
	for (let i = 0; i < 6; i++) {
		if (arr[i]) {
			switch (arr[i]) {
				case 1: ones.push(1);
								break;
				case 2: twos.push(2);
								break;
				case 3: threes.push(3);
								break;
				case 4: fours.push(4);
								break;
				case 5: fives.push(5);
								break;
				case 6: sixes.push(6);
								break;
			}
		}
	}
	switch (ones.length) {
		case 1: scoreArray[0] = 10; break;
		case 2: scoreArray[0] = 20; break;
		case 3: scoreArray[0] = 100; break;
		case 4: scoreArray[0] = 200; break;
		case 5: scoreArray[0] = 300; break;
		case 6: scoreArray[0] = 400; break;
		default: scoreArray[0] = 0;
	}
	switch (twos.length) {
		case 3: scoreArray[1] = 20; break;
		case 4: scoreArray[1] = 40; break;
		case 5: scoreArray[1] = 60; break;
		case 6: scoreArray[1] = 80; break;
		default: scoreArray[1] = 0;
	}
	switch (threes.length) {
		case 3: scoreArray[2] = 30; break;
		case 4: scoreArray[2] = 60; break;
		case 5: scoreArray[2] = 90; break;
		case 6: scoreArray[2] = 120; break;
		default: scoreArray[2] = 0;
	}
	switch (fours.length) {
		case 3: scoreArray[3] = 40; break;
		case 4: scoreArray[3] = 80; break;
		case 5: scoreArray[3] = 120; break;
		case 6: scoreArray[3] = 160; break;
		default: scoreArray[3] = 0;
	}
	switch (fives.length) {
		case 1: scoreArray[4] = 5; break;
		case 2: scoreArray[4] = 10; break;
		case 3: scoreArray[4] = 50; break;
		case 4: scoreArray[4] = 100; break;
		case 5: scoreArray[4] = 150; break;
		case 6: scoreArray[4] = 200; break;
		default: scoreArray[4] = 0;
	}
	switch (sixes.length) {
		case 3: scoreArray[5] = 60; break;
		case 4: scoreArray[5] = 120; break;
		case 5: scoreArray[5] = 180; break;
		case 6: scoreArray[5] = 240; break;
		default: scoreArray[5] = 0;
	}
  tempScore = scoreArray[0] + scoreArray[1] + scoreArray[2] + scoreArray[3] + scoreArray[4] + scoreArray[5];
  return tempScore
 
}

export default combinations