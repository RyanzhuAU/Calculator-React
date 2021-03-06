# Calculator-React

**How to install:**

-	Go to {application folder}
-	Run “npm install” to install dependencies.
-	Run “npm run test” to run the unit test.
-	Run “npm start” to start the calculator application
-   The web-calculator should be launched automatically. If not, visit "http://localhost:3000/" in the browser.  

**Implemented feature:**

- Required calculator function
- Scientist calculation 
  - “√x”, “log” and “ln” support the scientist calculation
  - For example: Input “9” + “+” + ”√x” + “=”. This operation equals “9 + 3”, and the result is 12.
- Support the keyboard input. The following keyboard input is supported.
  - “0~9”
  - “+”, “-”, “*”, “/”
  
**Unit test:**

-	Use Chai lib to do the unit test.
-	Have unit test for App.js and main logic.

**Endpoint Issue**

- When the input is invalid, the endpoint tried to return "NaN" value. For example, the request url is "http://calctest.iesim.biz/square_root?op1=-9".  
- The response could not be converted to the JSON correctly. The result data is just a string "{ "result": NaN }".
- So I just compare the response data with the following string directly. 
(response.data === "{ \"result\": NaN }\n").  