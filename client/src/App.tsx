import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import CorporateHome from "@/pages/corporate-home";
import ChristianCoaching from "@/pages/christian-coaching";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={CorporateHome} />
        <Route path="/christian-coaching" component={ChristianCoaching} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <Router />
  );
}

export default App;
