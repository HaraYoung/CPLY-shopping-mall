function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state.count < action.max
        ? { count: state.count + action.step }
        : state;
    case "DECREMENT":
      return state.count > action.min
        ? { count: state.count - action.step }
        : state;
    default:
      throw new Error("Unsupported action type:", action.type);
  }
}

export {reducer};