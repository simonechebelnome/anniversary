import { RouteObject } from "react-router-dom";
import { Paths } from "./enum";
import Dashboard from "./pages/Dashboard";
import Form from "./pages/Form";
import Completion from "./pages/Completion";
import MainLayout from "./components/MainLayout";

export const routes: RouteObject[] = [
  {
    path: Paths.DASHBOARD,
    element: (
      <MainLayout>
        <Dashboard />
      </MainLayout>
    ),
  },
  {
    path: `${Paths.FORM}/:id`,
    element: (
      <MainLayout>
        <Form/>
      </MainLayout>
    ),
  },
  {
    path: Paths.COMPLETION,
    element: (
      <MainLayout>
        <Completion />
      </MainLayout>
    ),
  },
];
