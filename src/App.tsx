import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./homePage";
import ContactPage from "./contactPage";
import PrivacyPolicy from "./privacyPolicy";
import TermsAndConditions from "./termsAndConditions";
import RefundPolicy from "./refundPolicy";

function App() {
  return (
    <Router>
      <div className="w-full h-screen bg-background">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
