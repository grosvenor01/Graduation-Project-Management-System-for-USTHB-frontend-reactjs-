import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Registration from './pages/registration/registration'
import Login from './pages/login/login';
import EditStudentP from './pages/editStudentprofil/editStudentP';
import EditProfP from './pages/editProfprofil/editprofp';
import EditPfe from './pages/editpfe/editpfe';
import Home from './pages/home/home';
import StudentProfile from './pages/studentprofile/studentprofile';
import ProfProfile from './pages/profprofile/profprofile';
import Test from './pages/tests/test';
import RespoProfile from './pages/respoprofile/respoprofile';
import CommissionProfile from './pages/comissionprofile/comissionprofile';
import Avancement from './pages/avancement/avancement';
import Evaluation from './pages/evaluation/evaluation';
import Verificationp from './pages/verification/verificationp';
import Verifications from './pages/verification/verifications';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "register",
    element: <Registration/>,
  },
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "editstudentp",
    element: <EditStudentP/>,
  },
  {
    path: "editprofp",
    element: <EditProfP/>,
  },
  {
    path: "editpfe",
    element: <EditPfe/>,
  },
  {
    path: "home",
    element: <Home/>,
  },
  {
    path: "studentprofile/:id",
    element: <StudentProfile/>,
  },
  {
    path: "profprofile/:id",
    element: <ProfProfile/>,
  },
  {
    path: "test",
    element: <Test/>,
  },
  {
    path: "respoprofile",
    element: <RespoProfile/>,
  },
  {
    path: "commissionprofile",
    element: <CommissionProfile/>,
  },
  {
    path: "avancement",
    element: <Avancement/>,
  },
  {
    path: "evaluation/:id",
    element: <Evaluation/>,
  },
  {
    path: "verificationp",
    element: <Verificationp/>,
  },
  {
    path: "verifications",
    element: <Verifications/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


