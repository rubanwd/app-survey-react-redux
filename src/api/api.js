export function surveyApi(method, data) {

    return fetch("http://localhost:3001/api/pool-results", {
    	method: method,
    	body: JSON.stringify(data),
    	headers: {
		    "Content-Type": "application/json"
		  }
    })
}