command: npm init -y 
command: tsc --init
Commands to start the project and work with typescript

command: npm install config dotenv express express-validator mongoose morgan winston
config: Handle configurations of the application
dotenv: environment variables
express: API framework
express-validator: validations
mongoose: mongo db atlas connection
morgan: reports
winston: log

command: npm install @types/config @types/express @types/mongoose @types/morgan @types/node ts-node-dev typescript -save-dev
dev dependencies

Start the system:
npm run dev

Cypress:
npm i cypress --save-dev

create a .ENV file with the properties:
DB_USER=<inform the user created in mongodb>
DB_PASS=<inform the password created in mongodb>

default.ts
Update the dbURI

