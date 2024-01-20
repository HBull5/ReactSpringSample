## Starting Application

- Ensure you have installed all the software needed to run this application, This can be found in the `downloads-needed.txt` file, you most likely have a few of these installed already. All of the dependencies are already installed but they can be reinstalled on the front end with `npm install` and on the service side with `mvn clean` then `mvn install` in their respective directories. 

- Ensure you have the run the `sql-create.sql` statements on your local machine to import the database. 

- Start the service from withing the directory by running `mvn spring-boot:run` this should start the application. You should see the `>>> Application Running <<<` in the terminal once the application has started. You can verify its running by hitting this endpoint in your browser `http://localhost:8080/employees`. You should see some JSON returned. 

- To start the front end navigate to that directory and start with `npm start`. You should see the a message in the console notifying you the application has started and should automatically open a browser tab for the given application. If not verify the status of the application running at `http://localhost:3000`.

## Troubleshooting

- The main issues you may run into are your local MySQL database with a different user/pass combination other than root/password. You can update the service file at `src/main/resources/application.properties` update `spring.datasource.username` to your username and `spring.datasource.password` to your password. 

- The other issue is probably not having the your environment variables set properly or your missing a piece of software listed in `downloads-needed.txt`. If you get back a java 17 version with `java --version`, any version number with `mvn --version`, any version number with `node --version`, and any version number with `npm --version`, you should be good. 

- If you're unable to resolve any of these issues on your own please feel free to reach out to me (Nick Bull) at (816) 912-6682. 