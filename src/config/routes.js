/**
 * Application routes configuration
 */
import HomePage from "../features/home";
import ProductPage from "../features/products";
import AboutPage from "../features/about";
import MembersPage from "../features/members";

export const ROUTES = {
  HOME: "/",
  ABOUT: "/aboutNefer",
  MEMBERS: "/ourMembers",
  PRODUCT: "/:type/:productName",
};

export const routeConfig = [
  {
    path: ROUTES.HOME,
    component: HomePage,
    exact: true,
  },
  {
    path: ROUTES.ABOUT,
    component: AboutPage,
  },
  {
    path: ROUTES.MEMBERS,
    component: MembersPage,
  },
  {
    path: ROUTES.PRODUCT,
    component: ProductPage,
  },
];
