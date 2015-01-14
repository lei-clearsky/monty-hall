var montyhall = function (totalTimes, totalDoors) {

	var times = totalTimes;
	var doors = totalDoors;

	var carDoor,
		selectedDoor,
		shownGoatDoor,
		switchDoor;
		switchWins = 0,
		selectedWins = 0;
		
	var chooseDoor = function (a, b) {
	    var door;

	    do {

		    door = Math.floor(Math.random() * doors);

	    } while (door === a || door === b);

	    return door;

    }

	for (var i = 0; i < times; i ++) {
		carDoor = chooseDoor();
		selectedDoor = chooseDoor();
		shownGoatDoor = chooseDoor(selectedDoor, carDoor);
		switchDoor = chooseDoor(selectedDoor, shownGoatDoor);

		if (selectedDoor === carDoor)
		    selectedWins ++;
	    else if (switchDoor === carDoor)
		    switchWins ++;
	}

	return{
		selectedWins: selectedWins + ' ' + (100.00 * selectedWins / times) + '%',
		switchWins: switchWins + ' ' + (100.00 * switchWins / times) + '%',
	};

}

montyhall(1000, 3);