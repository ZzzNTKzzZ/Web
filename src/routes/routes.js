import EditPortfolio from "../Page/EditPortfolio/EditPortfolio";
import Home from "../Page/Home/Home";
import LoginForm from "../Page/LoginForm/LoginForm";
import PortfolioHome from "../Page/Portfolio/PortfolioHome";

const publicRoutes = [
    {path: "/", element : Home},
    {path: "/editor", element : EditPortfolio},
    {path: "/portfolio", element : PortfolioHome},
    {path: "/loginForm", element : LoginForm}
]

export default publicRoutes;