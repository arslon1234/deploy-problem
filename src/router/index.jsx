import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
  import App from "../App";
  import First from "../components/First";
  import Second from "../components/Second";
  const Root = () => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<App />}>
          <Route index element={<First />} />
          <Route path="/second" element={<Second />} />
        </Route>
      )
    );
    return <RouterProvider router={router} />;
  };
  
  export default Root;
  