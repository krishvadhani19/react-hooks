import TogglePage from "../pages/TogglePage/TogglePage";
import TimeoutPage from "../pages/TimeoutPage/TimeoutPage";
import UseEffectOncePage from "../pages/UseEffectOncePage/UseEffectOncePage";
import UseArrayPage from "../pages/UseArrayPage/UseArrayPage";

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
        <Route path="useEffectOnce" element={<UseEffectOncePage />} />
        <Route path="useArray" element={<UseArrayPage />} />
      </Route>
    </>
  )
);

export default rootRouter;
