import { createRoot } from "react-dom/client";
import "./style.css";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Archive from "./pages/Archive.jsx";
import { DetailNotes } from "./pages/DetailNotes.jsx";
import AddNotes from "./pages/AddNotes.jsx";
import Error from "./pages/Error.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { ThemeProvider } from "./context/ThemeProvider.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { UserProvider } from "./context/UserProvider.jsx";
import LanguageProvider from "./context/LanguageProvider.jsx";

// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <ThemeProvider>
//       <UserProvider>
//         <LanguageProvider>
//           <Routes>
//             <Route element={<ProtectedRoute />}>
//               <Route path="/" element={<Home />} />
//               <Route path="/archive" element={<Archive />} />
//               <Route path="/notes">
//                 <Route path=":notesId" element={<DetailNotes />} />
//                 <Route path="new" element={<AddNotes />} />
//               </Route>
//             </Route>
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="*" element={<Error />} />
//           </Routes>
//         </LanguageProvider>
//       </UserProvider>
//     </ThemeProvider>
//   </BrowserRouter>,
// );
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/notes">
            <Route path=":notesId" element={<DetailNotes />} />
            <Route path="new" element={<AddNotes />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </ThemeProvider>
  </BrowserRouter>,
);
