//call to call sagas and all to run all of them parallely like Promise.all()
import { all, call } from "redux-saga/effects";

//this is one of the saga files that we wrote in store/categories
import { categoriesSaga } from "./categories (using redux saga)/category.saga";

//this is the root saga function
//calls all the sepcified sagas and runs them parallely and yields results,
//coz saga is a generator in first place
export function* rootSaga() {
  yield all([call(categoriesSaga)]);
}

//? why * after function, coz its generator and this is js way of writing this.
