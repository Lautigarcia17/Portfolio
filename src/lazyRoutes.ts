import { lazy } from "react";

export const NotFoundPage = lazy(() => import("./pages/NotFound/NotFound"));
export const SectionLayoutPage = lazy(() => import("./pages/SectionLayout/SectionLayout"));
export const ProjectsPage = lazy(() => import("./pages/Projects/Projects"));