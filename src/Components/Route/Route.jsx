import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Donation from "../Donation/Donation";
import Statistics from "../Statistics/Statistics";
import ShowDetails from "../ShowDetails/ShowDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import AllData from "../AllData/AllData";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <AllData></AllData>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/showdetails/:id",
        element: <ShowDetails></ShowDetails>,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

export default myRouter;
