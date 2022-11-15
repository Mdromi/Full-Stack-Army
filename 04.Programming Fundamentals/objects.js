/*====================
04.Programming Fundamentals
CMD: [ node objects.js ]
===================*/

const student1 = {
	firstName: 'Abu',
	secondName: 'Rayhan',
	email: 'rayhan@example.com',
	age: 25,
	attend: true,
};

const student2 = {
	firstName: 'Alvi',
	secondName: 'Chowdhury',
	email: 'alvi@example.com',
	age: 25,
	attend: true,
};

const student3 = {
	firstName: 'Akib',
	secondName: 'Ahmad',
	email: 'akib@example.com',
	age: 25,
	attend: true,
};

const allStudents = [student1, student2, student3];

for (let i = 0; i < allStudents.length; i++) {
	sendMail(allStudents[i].email);
}

function sendMail(email) {
	console.log('Sending email to', email);
}