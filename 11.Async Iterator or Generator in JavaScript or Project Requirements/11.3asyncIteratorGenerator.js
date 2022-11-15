/*====================
11.Async Iterator or Generator in JavaScript or Project Requirementst
CMD: [ node  11.3asyncIteratorGenerator.js ]
===================*/

const axios = require('axios').default;

async function getUsers() {
	const url = 'https://jsonplaceholder.typicode.com/users';
	const { data: users } = await axios.get(url);
	return users.map((user) =>
		axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
	);
}

(async () => {
	const users = await getUsers();
	for await (let v of users) {
		console.log(v.data.map((post) => post.title));
	}
})();