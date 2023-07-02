let employeeSalaries = {
	user1: 730,
	user2: 600,
	user3: 450,
	user4: 830,
	user5: 620,
	user6: 900,
};

summSalaries(employeeSalaries);

employeeSalaries = {};

summSalaries(employeeSalaries);

function summSalaries(list){
	let summ = 0;
	for(user in list){
		summ += list[user];
	}
	console.log(summ);
}