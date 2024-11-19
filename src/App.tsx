import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./screens/AppLayout";
import Overview from "./screens/Overview";
import Patients from "./screens/Patients";
import Schedule from "./screens/Schedule";
import Message from "./screens/Message";
import Transactions from "./screens/Transactions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "/",
        element: <Patients />,
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
      {
        path: "message",
        element: <Message />,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="bg-background mx-[18px]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
