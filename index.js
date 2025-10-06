"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logger(state) {
    switch (state.state) {
        case "loading":
            return "Loading ...";
        case "failed":
            return "Error ".concat(state.code);
        case "success":
            return "Downloading ".concat(state.response.title);
    }
}
var state = {
    state: "success",
    response: {
        title: "title",
        duration: 3,
        summary: "summary"
    }
};
console.log(logger(state));
