const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0
};

const myReducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case 'gather': {
      return {
        ...state, 
        supplies: state.supplies + 15,
        distance: state.distance,
        days: state.days + 1
      }
    }

    case 'travel' : {
      return {
        ...state,
        supplies: state.supplies - 20,
        distance: state.distance + 10,
        days: state.days

      }
    }

    case 'tippedWagon' : {
      return {
        ...state, 
        supplies: state.supplies - 30,
        distance: state.distance,
        days: state.days + 1
      }
    }
    default: {
      return state;
    }
  }
};

let wagon = myReducer(undefined, {type: 'gather'});
console.log(wagon);