import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const rootRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="hooks">
        <Route path="useToggle" element={<div>Hello</div>} />
      </Route>
    </>
  )
);

export default rootRouter;
