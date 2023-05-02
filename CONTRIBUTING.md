# Guide to Contributing

## Team Norms:
- Communicate async updates through both private discord channel (including prof + course assistant) and text group chat. 
- Large meetings (>30 minutes in nature) will attempt to be in-person unless inconvenient/impossible for certain team members. Small meetings/check-ins can be done over video confrencing platforms, such as Zoom to not be inherently intrusive.
- Members are responsible for promptly responding to communications and following deadlines. 
- Team members must be respectful of others' opinions and feelings. All situations should be approached with empathy.
- Conflicts will be resolved through conversation if minor in nature. If major, the team will take a vote. All group members must respect the majority decision, even if it conflicts with their own.
- If a member is absent or shirking their responsibilities to the point where it effects the other group members, then a formal warning can be issued to the person. This "formal" warning would need to be agreed upon by the remaining majority of the group. If 3 of these warnings are issued to one person, then formal action can be pursued with higher authority (professor).

## Git workflow:
- each person creates branches of their own and works out of that
- Each person will also review any code commits they see outstanding so as to speed up iteration
- If specific code hasnt been pushed for a long time, communication methods could be utilized to speed up the process

## Best Coding Practices/Rules of Contributing:
- Use of VScode preferred
- All members responsible for fixing any code they break (although other members can help!)
- Members should push edits frequently to best make use of version control (gives a back up in the case of the code breaking)
- Write self documenting code (name variable names properly, write comment codes that explain macroarchitecture of code)

## Setting Up Local Dev Environment:
- fork the project (if external contributor)
- clone the project to your local machine (git clone https://github.com/agiledev-students-spring-2023/final-project-new-york-chuckers replaced with your new repository link)
- change directory to the front-end directory (cd front-end)
- run npm install to add dependencies
- create an environment(.env) file
- choose a port to run the back-end (examples will be with port 5076)
- Add the connection to the back-end with a string in the .env file. This will be of the form 'REACT_APP_SERVER_HOSTNAME="http://localhost:5076"' but replace 5076 with your chosen back-end port.
- In a new terminal change directory to the back-end (cd back-end)
- run npm install
- create an environment (.env) file. 
- Add the port to run the server on. This would be of the form 'PORT = 5076' but replace 5076 with your chosen port. 
- Add the MongoDB database connection string under the variable DB_CONNECTION_STRING. For example you'd add 'DB_CONNECTION_STRING= "{ADD YOUR SERVER CONNECTION STRING HERE}"'.

## Building and Testing:
- change directory to the front-end directory (cd front-end)
- run npm install to add dependencies
- run npm start
- In a new terminal change directory to the back-end (cd back-end)
- run npm install
- run npm start