function Robot() {
	Robot.prototype.work = function() {
		return 'Я Robot – я просто працюю';
	}
}

function CoffeRobot() {
	Robot.apply(this);
}
CoffeRobot.prototype = Object.create(Robot.prototype);
CoffeRobot.prototype.constructor = CoffeRobot;
CoffeRobot.prototype.work = function() {
	return 'Я CoffeRobot – я варю каву';
}

function RobotDancer() {
	Robot.apply(this);
}
RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;
RobotDancer.prototype.work = function() {
	return 'Я RobotDancer – я просто танцюю';
}

function RobotCoocker() {
	Robot.apply(this);
}
RobotCoocker.prototype = Object.create(Robot.prototype);
RobotCoocker.prototype.constructor = RobotCoocker;
RobotCoocker.prototype.work = function() {
	return 'Я RobotCoocker – я просто готую';
}

let robots = [];
robots.push(new Robot());
robots.push(new CoffeRobot());
robots.push(new RobotDancer());
robots.push(new RobotCoocker());

for (let i = 0; i < robots.length; i++) {
	console.log(robots[i].work());
}