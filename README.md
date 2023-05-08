![Workflow Status](https://github.com/agiledev-students-spring-2023/final-project-new-york-chuckers/actions/workflows/back-test.yml/badge.svg?event=push)

![Workflow Status](https://github.com/agiledev-students-spring-2023/final-project-new-york-chuckers/actions/workflows/front-test.yml/badge.svg?event=push)

# [TesterConnector](https://chuckers-front-cd.onrender.com/) (click to see the deployed app)
Our project is a solution that connects talented student freelancers looking for work experience and small jobs with companies willing provide them. The solution allows students to create profiles and connect with different companies to potentially freelance for. Companies receive talented students that, despite lacking credentials, are talented and work for cheaper rates than professional freelancers. On the otherhand, students receive the ability to have side-jobs, gain experience in their preferred field, and generate a portfolio of work.

## Product Vision:
The MVP for our product will include the ability for sign-up, onboarding, and profile creation for both individuals and companies. Companies would also be able to create job/free-lancing postings to then hopefully attract the individual students. Students would then be able to search for different position listings and then be able to apply through the application.

Other potential additions for later, include companies being able to invite certain students to apply to their positions, and individuals being able to add examples of their previous work, to show to companies they're qualified.

## History of the Product:
The history of the project came from the entrepreneurial backgrounds of its founders. All of us had a background in entrepreneurship and noticed the disconnect between companies and students. Students needed work experience to help them break in to their fields of choice. Parrallely, companies, and specifically start-ups, are always searching for new talent and always have contractor/free-lancer jobs that they have to get done. We realized that we could bridge this gap and solve both problems at once.

## How to Run:
To run the program you'll need to start both the back-end server and the front-end react app. Enter (cd) into each of the folders (front-end for the react app) and (back-end for the server). Once on each folder you'll need to run the following commands "npm install" (to install the node_modules dependencies) and "npm start" (to start both the server and the react app).The code should be running. If you search for the localhost:port where the react app is running you'll be able to access around the app. 

In the front-end directory, create an environment file (.env) that has the port you would like the back-end to run on. For example, add 'REACT_APP_SERVER_HOSTNAME="http://localhost:5076"' if you would like to have the server run on port 5076. Similarly, in the back-end add the same port in another environment(.env) file. This would be of the form 'PORT = 5076'. In that, also add a MongoDB database connection string under the variable DB_CONNECTION_STRING. For example you'd add 'DB_CONNECTION_STRING= "{ADD YOUR SERVER CONNECTION STRING HERE}"'. 

## Contributors:
Tiffany Lee: [Github](https://github.com/les5185)

Pranav Kanchi: [Github](https://github.com/pkanchi23)

Omri Sokol: [Github](https://github.com/omri-sokol)

Joey Lalo: [Github](https://github.com/jlalo01)

