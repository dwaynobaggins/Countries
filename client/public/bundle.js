"use strict";var formElem=document.querySelector("#inputForm"),inputElem=formElem.querySelector("input[type='text']"),formErrorMessageElem=formElem.querySelector("#error_message"),resultsUl=document.querySelector("#results"),errorMessageClassName="is_in_error_state",activeResultsClassName="results_active_state",handleFormSubmission=function(a){a.preventDefault(),fetch("data/".concat(inputElem.value,".json")).then(function(a){if(a.ok)return a.json();throw new Error("Could not find entry. Please try again.")}).then(function(a){formErrorMessageElem.classList.contains(errorMessageClassName)&&formErrorMessageElem.classList.remove(errorMessageClassName),console.log(a),showResults(a.results)})["catch"](function(a){resultsUl.innerHTML="",resultsUl.classList.contains(activeResultsClassName)&&resultsUl.classList.remove(activeResultsClassName),formErrorMessageElem.innerHTML=a,formErrorMessageElem.classList.contains(errorMessageClassName)||formErrorMessageElem.classList.add(errorMessageClassName)})},showResults=function(a){resultsUl.innerHTML="",a.map(function(a){var b=document.createElement("li");b.innerHTML="".concat(a.countryName,": ").concat(a.capitalCity),resultsUl.appendChild(b)}),resultsUl.classList.contains(activeResultsClassName)||resultsUl.classList.add(activeResultsClassName)};formElem.addEventListener("submit",handleFormSubmission);

//# sourceMappingURL=bundle.js.map