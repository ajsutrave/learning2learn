


# Learning2Learn Roadmap:

### Stage 1:
* __MVP__
	* _Brand Strategy_
	* _Organizational Planning_
	* _Front End Development_
		* Organize into module based system
		* Develop necessary sub-systems:
			* Request sending/response handling
			* Page Element Listener System
			* Notification System
			* Skin Customization System
			* ...
	* _Back End Development_
		* Handle programming lesson errors/exceptions passed from the client, which are tied to individual submitted chunks of code
		* Handle other specific identified cases
		* Save all submissions in persistent central data store for later processing
	* _Shared Front/Back End Development_ (Additional Features)
		* > The goal of these features is to maximize user retention and the system's ability to teach (or facilitate learning in users). There are a ton of features that could be implemented here. This section is an attempt to collect a large number of ideas which can then be filtered through to find the most optimal combination of resource investment -> system effectiveness
		* [?] IDE Line Targetting System (addition to Notification System)
		* [?] Individual Progress Tracking System
		* [?] Session Specific Leaderboards
		* [?] Persistent Characters/Avatars
		* [?] Leveling System
		* [?] Achievement System
		* [?] Progress Report/Profile System
		* [?] Unlock Systems
			* [?] Avatar/character customizations or upgrades
			* [?] Inventory
			* [?] Hint tokens
			* [?] Gold (to purchase other unlockable types)
			* [?] ...
		* [?] Share/Social Engagement Systems
			* between users in shared classroom environments
			* between users globally
		* [?] Validation Network System
			* Link in teachers, mentors, advisors?
			* External platform integration?
		* [?] Fog of War System (Unlock lessons, modules, problems, etc. as users complete more tasks)
		* [?] ...
____________________________________________________________________

### Stage 2:
> Analyze potential revenue generation/funding opportunities at this stage

* Test MVP | Collect Feedback | Benchmark Effectiveness
	* [?] Partner with existing (small) organizations that teach programming.
	* [?] Host small lessons integrated with Learning2Learn and release them to select online communities
* Collect lots of data, and then some!
* Begin planning and development of initial machine learning systems
* Create more robust back end logic, and prepare for machine learning model integration
* Begin administrative view which allows admins to tie processed model data to specific error types using labels, and appropriate responses/reactions that will be reflected in users' clients while using the product
* Increase product scope (affects front and back end) with additional features that fit within this stage's budget/time constraints
____________________________________________________________________

### Stage 3:
* Fully develop the first iteration of the machine learning system, and the interaction between the back end and generated models
	* The initial machine learning system targets individual error types by clustering errors in submitted samples of code. It finds large clusters, identifies and labels them, then handles matching code sent from the client in real time based on label->response lookups
		* This system targets general categories of errors, and handles them in a static predefined way
		* For a given "lesson problem", the supplied code will be run against 2 different models:
			* Model generated from data from this specific "lesson problem" (ie. section 2, problem 3 in "Intro to Python" course)
			* Model generated from data from entire domain (in python coding, this would be all supplied python code, ever)
____________________________________________________________________
### Stage 4:
> Analyze potential revenue generation/funding opportunities at this stage

* Partner with larger organizations
	* Collect the most data you could ever imagine
____________________________________________________________________

### Stage 5:
* Create more robust machine learning system
	* Adds another layer of machine learning in which we account for traits specific to each individual user. This allows us to tailor a variety of factors in our content delivery process to maximize the system's overall teaching effectiveness, on a per user basis. Tweakable areas include but are not limited to: language, content, tone, media type, teaching methodology, etc
		* This system will need to be planned out carefully so as to not rapidly increase product development costs as more courses are added. The more varied the human input the administrative team has to provide, the more the content creation process will cost. These costs will most likely increase exponentially with each customization type included. Find the right ones that can be provided cheaply while adding the most value to users!
____________________________________________________________________

### Stage 6:
* Test effectiveness of overall system. Tweak and optimize

____________________________________________________________________

### Stage 7:
##### Option 1
* Begin integrating course material from other domains, move towards becoming a platform/web service
	* New stakeholder types created: Course Creator, Course Collaborator
		* Requires expanding the administrative view created in stage 2 into a user facing portal, allowing anyone to create and edit course materials and leverage the Learning2Learn systems
##### Option 2:
* Expand the product offerings of existing platforms: LinkedIn Learning, Udemy, etc
##### Option 3:
* Target established learning institutions, license
##### Option 4:
* Something else
