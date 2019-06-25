//Reducers should be PURE, meaning it should not get/request data
//outside world (db, dom, api etc.). It should decide what to return (as a new state)
//based on input parameters which are prev_state and action

/*
export default (state, action) => {
  //bad!!!
  return document.querySelector("input")...

  //bad!!!
  return axios.get("/posts")

  //good
  return state + action => new_state
}
*/

//ANOTHER IMPORTANT THING ABOUT REDUCERS:
//please watch the 12min video named - 173.A Misleading Rule
//MISLEADING >> Reducers MUST NOT mutate(change) its input "state" argument
//bad!!!
//state.name = "Sam"
//state.push({...})

//Removing an element from an arr:
//BAD: state.pop()        //GOOD: state.filter(element => element !== "hi")
//Adding an element to an arr:
//BAD: state.push("hi")   //GOOD: [...state,"hi"]
//Replacing an element in an arr:
//BAD: state[0] = "hi"    //GOOD: state.map(element => element ==="hi" ? "bye" : "element")
//Adding & Updating a property in/to an object:
//BAD: state.name = "Sam" //GOOD: {...state, name:"Sam"}
//Removing a property from an object:
//BAD: delete state.name
//GOOD: {...state, age:undefined}
//      _.omit(state, "age")

/*
export default () => {
  return 123;
};
*/

export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
