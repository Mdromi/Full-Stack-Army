/*====================
10.Asynchronous Programming in JavaScript
CMD: [ node  10.3promise.js ]
===================*/
// const isResolved = true;

// const promise = new Promise((resolve, reject) => {
//     if (isResolved) {
// 		resolve('completed');
// 	} else {
// 		reject('data');
// 	}
// });
// console.log(promise); // Promise { 'completed' }

// promise
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((e) => {
// 		console.log('Rejected');
// 	});

// function wait(ms){
//     const promise = new Promise((resolve) => {
//         setTimeout(resolve, ms)
//     });
//     return promise;
// }

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// wait(1000).then(() => {
// 	console.log('Done in 1000ms');
// });

// wait(2000).then(() => {
// 	console.log('Done in 2000ms');
// });

// wait(3000).then(() => {
// 	console.log('Done in 3000ms');
// });

const get = (url) => Promise.resolve(url);

get(`/users?username=anarul`)
	.then((user) => {
		/** do all other operations here */
		return get(`/posts?user_id=${user.id}`);
	})
	.then((posts) => {
		const latestPost = posts[0];
		return get(`/comments?post_id=${latestPost.id}`);
	})
	.then((comments) => {
		const latestComment = comments[0];
		return get(`/users?username=${latestComment.username}`);
	})
	.then((user) => {
		console.log(user);
	})
	.catch(() => {
		console.log('Error');
	});