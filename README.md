## App description
This is a simple one-page application. A user should be able to fill survey form, submit it and view other submitted results. 

This repo is set up with `create-react-app` and `express` server. There are endpoints to retrieve survey results and submit the form.

**Acceptance criteria:**

* There are presented two main sections
* The first section is a survey form. The form is always visible. It contain 4 elements: Name input (text), hometown (select), list of favourite tools (checkboxes) and submit button.
* Backend validation is implemented the user see backend validation errors.
* Second section is a list of survey results. The list is always visible. Results fetch from the endpoint. After the user submits the survey form his result will add to the top of the list.
* It's implemented using `react` + `redux`


## Development

* Install packages with `npm i`
* Run both backend server ( `npm run server` ) and frontend ( `npm start` ). Then you could access frontend on `3000` port and backend on `3001`

## Endpoints

**To retrieve the list of survey results:**

`GET http://localhost:3001/api/pool-results`

**To add user's survey results:**

`POST http://localhost:3001/api/pool-results`

Request body example

```
{
    "name": "Albert",
    "home_town": "Leeds",
    "favorite_tools": ["Photoshop", "Sketch"]
}
```
Results will be added to the list. Backend will respond with added item.