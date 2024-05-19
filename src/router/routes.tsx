import TogglePage from "../pages/TogglePage/TogglePage";
import TimeoutPage from "../pages/TimeoutPage/TimeoutPage";
import Page from "../pages/UseEffectOncePage/UseEffectOncePage";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const rootRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="hooks">
        <Route path="useToggle" element={<TogglePage />} />
        <Route path="useTimeout" element={<TimeoutPage />} />
        <Route path="useEffectOnce" element={<Page />} />
      </Route>
    </>
  )
);

export default rootRouter;
