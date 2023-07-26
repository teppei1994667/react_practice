type ACTIONTYPE =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" };

type STORE = { reducerCount: number };

export const initialState = { reducerCount: 0 };

export const countReducer = (state: STORE, action: ACTIONTYPE) => {
  switch (action.type) {
    case "increment":
      return { reducerCount: state.reducerCount + 1 };
    case "decrement":
      return { reducerCount: state.reducerCount - 1 };
    case "reset":
      return { reducerCount: (state.reducerCount = 0) };
    default:
      throw new Error();
  }
};
