import promises = require("inspector/promises");

type NeworkLoadingState = {
  state: "loading"
}

type NeworkFailedState = {
  state: "failed";
  code: number
}

type NeworkSuccessState = {
  state: "success",
  response: {
    title: string;
    duration: number;
    summary: string;
  }
}

//discriminating union type
type NetworkState = 
  | NeworkLoadingState 
  | NeworkFailedState 
  | NeworkSuccessState;


function logger(state: NetworkState) {
  switch(state.state) {
    case "loading":
      return "Loading ...";
    case "failed":
      return `Error ${state.code}`;
    case "success":
      return `Downloading ${state.response.title}`
  }
}

const state: NetworkState = {
  state: "success",
  response: {
    title: "title",
    duration: 3,
    summary: "summary"
  }
}

console.log(logger(state));
