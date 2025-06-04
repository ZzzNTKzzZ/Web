import EditPortfolio from "../Page/EditPortfolio/EditPortfolio";
import Home from "../Page/Home/Home";
import LoginForm from "../Page/LoginForm/LoginForm";

const publicRoutes = [
    {path: "/", element : Home},
    {path: "/editor", element : EditPortfolio},
    
    {path: "/loginForm", element : LoginForm}
]

export default publicRoutes