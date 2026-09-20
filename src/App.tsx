import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StoriesPage from "./pages/StoriesPage";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import PageLoader from "./ui/PageLoader";
import { useEffect, useState } from "react";

const pageNames: Record<string, string> = {
  "/": "Home",
  "/stories": "Stories",
  "/features": "Features",
  "/pricing": "Pricing",
};

function RoutedPages() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <RouteLoader
          key={location.pathname}
          pageName={pageNames[location.pathname] ?? "Photosnap"}
        />
      </AnimatePresence>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </>
  );
}

function RouteLoader({ pageName }: { pageName: string }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 600);

    return () => window.clearTimeout(timer);
  }, []);

  return isLoading ? <PageLoader pageName={pageName} /> : null;
}

function App() {
  return (
    <BrowserRouter>
      <RoutedPages />
    </BrowserRouter>
  );
}

export default App;
