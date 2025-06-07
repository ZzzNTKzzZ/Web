import PrivacyPolicy from "../components/Footer/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "../components/Footer/TermsOfUse/TermsOfUse";
import EditPortfolio from "../Page/EditPortfolio/EditPortfolio";
import Home from "../Page/Home/Home";
import LoginForm from "../Page/LoginForm/LoginForm";

const publicRoutes = [
    {path: "/", element : Home},
    {path: "/editor", element : EditPortfolio},
    
    {path: "/loginForm", element : LoginForm},

    {path: "/termsOfUse", element : TermsOfUse},
    {path: "/privacyPolicy", element : PrivacyPolicy}
]

export default publicRoutes