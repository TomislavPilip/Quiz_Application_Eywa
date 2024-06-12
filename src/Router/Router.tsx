import React, { FC, lazy, ReactNode, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Loader } from "../components/ui/Loader";
import { RequiresAuth } from "./RequiresAuth";
import Quiz from "@/components/Quiz/Quiz";
import Categories from "@/components/Categories/Categories";

// Define pages
const Login = lazy(() => import("../pages/login/login"));
const Home = lazy(() => import("../pages/home/home"));

interface Route {
  path: String;
  component: ReactNode;
}

export type RouteParams = {
  euuid?: string | undefined;
};

interface Props {
  routes?: Route[];
}

export const Router: FC<Props> = () => (
  <Suspense
    fallback={
      <>
        <Loader fullscreen />
      </>
    }
  >
    <Routes>
      <Route path={`${import.meta.env.BASE_URL}`} element={<Login />} />
      <Route
        path={`${import.meta.env.BASE_URL}home/*`}
        element={
          <RequiresAuth>
            <Home />
          </RequiresAuth>
        }
      />
      <Route path={`${import.meta.env.BASE_URL}quiz/*`} element={<Quiz />} />
      <Route
        path={`${import.meta.env.BASE_URL}categories/*`}
        element={<Categories />}
      />
    </Routes>
  </Suspense>
);
