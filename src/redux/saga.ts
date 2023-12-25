import { all } from "redux-saga/effects";
import {
  watcherGetProductListStorage,
  watcherGetProductListSite,
  watcherAddProduct,
  watcherUpdateProduct,
  watcherGetAllCategories,
  watcherDeleteProductFromSite,
  watcherAddImagesForProduct,
} from "./products/saga";
import { watcherCheckAuth, watcherLogOut } from "./profile/saga";

function* saga() {
  yield all([
    watcherCheckAuth(),
    watcherLogOut(),
    watcherGetProductListStorage(),
    watcherGetProductListSite(),
    watcherAddProduct(),
    watcherUpdateProduct(),
    watcherGetAllCategories(),
    watcherDeleteProductFromSite(),
    watcherAddImagesForProduct(),
  ]);
}
export default saga;
