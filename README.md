# QA Automation

This project belong to the assessment of the QA automation certification of Wizeline Academy

## Development Setup

### Prerequisites


- Install [Node.js](https://nodejs.org/en/ "Node.js") which includes [Node Package Manager](https://www.npmjs.com/get-npm "Node Package Manager")
- Install [Testcafe](https://www.npmjs.com/get-npm "Testcafe")

```
npm install -g testcafe Installing TestCafe 
```

### Installing

- Clone the project 


```
git clone git@github.com:bluesmoss/am-qa-automation.git
```

- Navigate to the  am-qa-automation directory

```
cd am-qa-automation
```

- Install dependencies

```
npm install
```

- Create a dotenv file in the root directory of the project with the same structure as the .env.example file

	 The site to test is [Swag Labs](https://www.saucedemo.com/ "Swag Labs"), there you can get the access credentials required in the .env file.


## Running the tests

Once de .env file is created with the right information,you can execute the following command to run the tests:

- Run the tests for the 10 scenarios required in the assesment in chrome browser:

```
npm run test-all-chrome
```
- Verify the browser avalaibles in your computer:

```
npm run test-check-browsers
```
- Run the tests for the 10 scenarios required in the assesment in allt browsers installed in your computer:

```
npm run test-all-browsers
```
- Run the tests for the 10 scenarios required in the assesment in chrome browser and get a json report

```
npm run test-all-chrome-json
```


Cooked with 💙 by 👽 @bluesmoss