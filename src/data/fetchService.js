import Data from "./services.json";

function fetchService() {
  const LS_KEY = "services";
  let fromLs = localStorage.getItem(LS_KEY);

  if (!fromLs) {
    localStorage.setItem(LS_KEY, JSON.stringify(Data.data.services));
    fromLs = localStorage.getItem(LS_KEY);
  }
  return JSON.parse(fromLs);
}

function fetchQuiz() {
  const LS_KEY = "quiz";
  let fromLs = localStorage.getItem(LS_KEY);

  if (!fromLs) {
    localStorage.setItem(LS_KEY, JSON.stringify(Data.data.quiz));
    fromLs = localStorage.getItem(LS_KEY);
  }
  return JSON.parse(fromLs);
}

function fetchServiceResult() {
  const LS_KEY = "service_result";
  let fromLS = localStorage.getItem(LS_KEY);
  return JSON.parse(fromLS);
}

function fetchClientName() {
  const LS_KEY = "name";
  let fromLS = localStorage.getItem(LS_KEY);
  return JSON.parse(fromLS);
}
function fetchClientEmail() {
  const LS_KEY = "email";
  let fromLS = localStorage.getItem(LS_KEY);
  return JSON.parse(fromLS);
}

export {
  fetchService,
  fetchQuiz,
  fetchServiceResult,
  fetchClientName,
  fetchClientEmail,
};
