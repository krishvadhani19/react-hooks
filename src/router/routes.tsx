import TogglePage from "../pages/TogglePage/TogglePage";
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
      </Route>
    </>
  )
);

export default rootRouter;
