function Robot() {
	let self = this;

	self.work = function() {
		return 'Я Robot – я просто працюю';
	}
}

function CoffeRobot() {
	Robot.call(this);
	let self = this;

	self.work = function() {
		return 'Я CoffeRobot – я варю каву';
	}
}
function RobotDancer() {
	Robot.call(this);
	let self = this;

	self.work = function() {
		return 'Я RobotDancer – я просто танцюю';
	}
}
function RobotCoocker () {
	Robot.call(this);
	let self = this;

	self.work = function() {
		return 'Я RobotCoocker – я просто готую';
	}
}

let robots = [];
robots.push(new Robot());
robots.push(new CoffeRobot());
robots.push(new RobotDancer());
robots.push(new RobotCoocker());

for(let i = 0; i<robots.length; i++){
	console.log(robots[i].work());
}














