import {
  BrowserRouter as Router, 
  Routes,
  Route
} from "react-router-dom";
import { Index } from "./screen/Index";

export function AppRoutes() {
  return(
    <Router>
      <Routes>
        <Route path="" element={<Index />}/>
      </Routes>
    </Router>
  )
}