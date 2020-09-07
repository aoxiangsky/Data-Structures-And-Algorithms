const arr1 = [1, 5, 9, 6, 2, 5, 8, 7, 6, 315, 35, 47, 8, 5, 456, 78, 352, 1, 45];

function sortArr(array) {
	const arr = array
	for (let i = 0; i < arr.length; i++){
		for (let j = 0; j < arr.length - i -1; j++){
			if (arr[j] > arr[j+1]) {
				const item = arr[j]
				arr[j] = arr[j + 1]
				arr[j+1] = item
			}
		}
	}
	console.log(arr)
}

sortArr(arr1)
