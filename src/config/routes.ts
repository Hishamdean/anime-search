import IRoute from "../interfaces/routes";
import HomePage from "../pages/home";
import Synopsis from "../pages/synopsis";

const routes: IRoute [] = [
  {
    path: '/',
    name: 'Homepage',
    component: HomePage,
    exact: true,
  },
  {
    path: '/',
    name: 'Synopsis',
    component: Synopsis,
    exact: true,
  }
]

export default routes;