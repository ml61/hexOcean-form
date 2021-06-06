Near 5-6 hours to perform this task.
Form is styled with react-bootstrap and powered with Formik library.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Screenshots from this mini-app are below:
1) Initial:
![image](https://user-images.githubusercontent.com/74111728/120899620-f5d46780-c630-11eb-95cc-d766c5a69866.png)

2) Trying to submit form, while field is filled incorrectly (slice must be integer):
![image](https://user-images.githubusercontent.com/74111728/120899710-5c598580-c631-11eb-98cf-5779e70f332e.png)

3) Successfully added dish (you can see response data in console). After successfully posted dish button is disabled for 3 seconds and form is resetted:
![image](https://user-images.githubusercontent.com/74111728/120899741-7dba7180-c631-11eb-8678-94c76b7f876c.png)

4) if would be some server errors, bootstrap-alert will show a message of this error to a user, form won't be reseted. I added a test button for making a bad request to a server.
![image](https://user-images.githubusercontent.com/74111728/120937712-44f0ca00-c70f-11eb-807b-5854b897a183.png)




