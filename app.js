// // Async: Now and later
// let number = yourNumber(randomNumber());
// function yourNumber(num) {
// 	console.log(`Your number is ${num}.`);
// 	return num;
// }

// // this function is called 2 seconds after the first
// function fourTimes(num) {
// 	setTimeout(() => {
// 		console.log(`Your number multiplied by 4 is ${num * 4}`);
// 	}, 2000);
// }

// // generates random number between 1 and 10
// function randomNumber() {
// 	return Math.floor(Math.random() * 10 + 1);
// }

// fourTimes(number);

// function getWords(word) {
// 	console.log('David');
// 	setTimeout(() => {
// 		console.log('Allen');
// 	}, 3000);
// 	setTimeout(() => {
// 		console.log('Mayes');
// 	}, 2000);
// 	setTimeout(() => {
// 		console.log('Jr');
// 	}, 1000);
// }

// getWords();

// // Callback
// function countdown(num, callback) {
// 	console.log(num);
// 	var timer = setInterval(function() {
// 		console.log(num - 1);
// 		num--;
// 		if (num <= 0) {
// 			clearInterval(timer);
// 			return callback();
// 		}
// 	}, 1000);
// }

// function done() {
// 	console.log('I am done!');
// }

// countdown(10, done);

// // Promise
// let order = false;

// function orderChickenSandwich() {
//   return new Promise((resolve, reject) => {
//     if (order === true) {
//       let food = {
//         sandwich: 'chicken',
//         veggies: 'lettuce'
//       };
//       resolve(food);
//     } else {
//       let err = new Error('Something went wrong!');
//       reject(err)
//     }
//   }
//   );
// }

// function orderFood() {
//   orderChickenSandwich()
//   .then(food => {
//     console.log(food);
//   }).catch(err => {
//     console.log(err);
//   })
// }

// orderFood();

// Chaning Promises
function newPromise(num) {
	new Promise(resolve => {
		setTimeout(() => {
			resolve(num);
			console.log(num);
		}, 2000);
		return num;
	})
		.then(num => {
			num = num * 2;
			setTimeout(() => console.log(num), 1000);
			return num;
		})
		.then(num => {
			num = num * 4;
			setTimeout(() => console.log(num), 2000);
			return num;
		})
		.then(num => {
			num = num * 6;
			setTimeout(() => console.log(num), 3000);
			return num;
		});
}

newPromise(1);
