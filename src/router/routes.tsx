import TogglePage from "../pages/TogglePage/TogglePage";
import TimeoutPage from "../pages/TimeoutPage/TimeoutPage";

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
      </Route>
    </>
  )
);

export default rootRouter;
