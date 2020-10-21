"use strict";

const formElem = document.querySelector("#inputForm");
const inputElem = formElem.querySelector("input[type='text']");
const formErrorMessageElem = formElem.querySelector("#error_message");
const resultsUl = document.querySelector("#results");

const errorMessageClassName = "is_in_error_state";
const activeResultsClassName = "results_active_state";

const handleFormSubmission = (event) => {
    event.preventDefault();

    fetch(`data/${inputElem.value}.json`)        
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error("Could not find entry. Please try again.")
            }
        })
        .then(json => {
            formErrorMessageElem.classList.contains(errorMessageClassName) && formErrorMessageElem.classList.remove(errorMessageClassName)
            console.log(json);
            showResults(json.results);         
        })
        .catch((error) => {
            resultsUl.innerHTML = "";
            resultsUl.classList.contains(activeResultsClassName) && resultsUl.classList.remove(activeResultsClassName);
            formErrorMessageElem.innerHTML = error;
            !formErrorMessageElem.classList.contains(errorMessageClassName) && formErrorMessageElem.classList.add(errorMessageClassName)
        })
}

const showResults = (results) => {
    resultsUl.innerHTML = "";
    
    results.map(result => {
        const liElm = document.createElement('li');
        liElm.innerHTML = `${result.countryName}: ${result.capitalCity}`
        resultsUl.appendChild(liElm);
    });

    !resultsUl.classList.contains(activeResultsClassName) && resultsUl.classList.add(activeResultsClassName);
}

formElem.addEventListener("submit", handleFormSubmission);