import PrivacyPolicy from "../components/Footer/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "../components/Footer/TermsOfUse/TermsOfUse";
import EditPortfolio from "../Page/EditPortfolio/EditPortfolio";
import Home from "../Page/Home/Home";
import LoginForm from "../Page/LoginForm/LoginForm";
import PortfolioHome from "../Page/Portfolio/PortfolioHome";
import About from "../Page/About/About";
import Contact from "../Page/Contact/Contact";
import LoginAfter from "../Page/LoginAfter/LoginAfter";

const publicRoutes = [
  { path: "/", element: Home },
  { path: "/editor/:id", element: EditPortfolio },

  { path: "/loginForm", element: LoginForm },

  { path: "/termsOfUse", element: TermsOfUse },
  { path: "/privacyPolicy", element: PrivacyPolicy },

  { path: "/portfolio", element: PortfolioHome },
  { path: "/About", element: About },
  { path: "/Contact", element: Contact },

  { path: "/loginAfter", element: LoginAfter },
];

export default publicRoutes;
