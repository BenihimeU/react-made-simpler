import "./App.css";
import { AppContent } from "./components/common/AppContent";
import AppHeader from "./components/common/AppHeader";

export const App = () => {
  return (
    <div>
      <AppHeader title='Movie Book' />
      <AppContent />
    </div>
  )
}