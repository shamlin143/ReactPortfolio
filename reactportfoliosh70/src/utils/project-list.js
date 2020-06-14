let project_list = [
	{
		image:
			'https://github.com/shamlin143/PortfolioRefresh3/blob/master/Assets/Foodtruck.jpeg',
		title: 'Food Truck Locator',
		des:
			"This is a front-Stack app using Jquery, Bootstrap, HTML, CSS and JSON for api calls.The purpose is to help people locate food trucks in the vicinty based on type of food popularity and provides directions to the Trucks location.",
		tags: [ 'HTML', 'CSS', 'Bootstrap', 'Jquery' ],
		links: {
			launch: ' https://shamlin143.github.io/foodTruckLocate/',
			github: 'https://github.com/shamlin143/foodTruckLocate'
		}
	},
	{
		image:
			"https://github.com/shamlin143/PortfolioRefresh3/blob/master/Quarantinment2.png",
		title: 'Quarentainment',
		des:
			"This is a Full Stack Project using ExpressJS and Passport (NodeJS) Development of a Social Media App. Passport allows for password authentication and hashing of the password and username for privacy. Also, it allows entered usernames, password and responses to be saved in a MySQL database. The purpose of this app is to allow a place for people to visit during the 'shut-in' time of being in quarantine, due to Covid-19.", 
		tags: [ 'HTML', 'CSS','Nodejs', 'express','Jquery','Bootstrap' ],
		links: {
			launch: 'https://quarintainment2.herokuapp.com/',
			github: 'https://github.com/shamlin143/Project_Two'
		}
	},
	{  
		image:
			'https://github.com/shamlin143/PortfolioRefresh3/blob/master/workoutTracker.jpeg',
		title: 'Workout Tracker',
		des:
			"This is a Full Stack Project that allows a user to add an exercise and its parameters to be saved in the MongoDB using Mongoose.  It then will chart the daily data as well as the parameters (time of exercise, number of reps, etc). It also used 'Moment' to allow for real time and date recording of when the data/exercises were performed.",
		tags: [ 'HTML', 'CSS', 'Nodejs', 'Mongoose'],
		links: {
			launch: 'https://workout-tracker-final-ed.herokuapp.com/?id=5ecef7670caa2a0017bf238b',
			github: 'https://github.com/shamlin143/WorkoutTracker'
		}
	},
	{
		image:
			'https://github.com/shamlin143/PortfolioRefresh3/blob/master/EmployeeList.jpeg',
		title: 'Employee Directory',
		des:
			"This is a Full-Stack React App.  It uses various components to create the various parts of the app.  Its purpose is to return a list of all the people in a bussiness.  It will then allow one to sort the people by first name, last name, gender, email and age.  It utilized the 'usestate' and 'useContext' hook.  Employees are propagated with the 'randomuser.me' api.",
		tags: [ 'HTML', 'CSS', 'React', 'JavaScript', 'JQuery' ],
		links: {
			launch: 'https://employeedirectorysh3.herokuapp.com/.',
			github: 'https://github.com/shamlin143/EmployeeDirectory'
		}
	},
	{
		image:
			'https://github.com/shamlin143/PortfolioRefresh3/blob/master/BudgetTracker.jpeg',
		title: 'Budget Tracker',
		des:
			"This is a PWA (Progressive Web App).  A PWA allows for on line and offline storage of saved data.  When the app first loads, it saves main files in cache allowing for this app to run in offline mode.  While offline, the entered data is stored in cache as well.  When the app goes back on line, it will upload the data to the MongoDB. It utilizes 'compression' in order to keep file sizes down, allowing for faster laods as well. This app allows for one to enter name and amount of expenses.  It then totals them and keeps a running budget total.",
		tags: ['HTML','express','Mongoose' ],
		links: {
			launch: 'https://agile-citadel-39045.herokuapp.com/',
			github: 'https://github.com/shamlin143/budgettrackerhw'
		}
	},
	{
		image:
			'https://github.com/shamlin143/PortfolioRefresh3/blob/master/Assets/IMAGE%203-17-20%20AT%204.06%20PM.jpeg',
		title: 'Weather Dashboard',
		des:
			"This is a Front-Stack App that allows one to look up the weather anywhere in the world.  It uses 'openweathermap.org' api in order to return the temperature, humidity, wind, UV index, as well as a 5 day forcast.  It uses moment to keep the date and time of the request current as well as to request future weather for the 5 day forcast.  ",
		tags: ['HTML', 'CSS', 'JavaScript', 'Json' ],
		links: {
			launch: 'https://shamlin143.github.io/API-Weathermap/',
			github: 'https://github.com/shamlin143/API-Weathermap'
		}
	}
];

export default project_list;