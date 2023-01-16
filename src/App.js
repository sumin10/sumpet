import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserContextProvider } from "./context/UserContext";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <Navbar />
        <Outlet />
      </UserContextProvider>
    </QueryClientProvider>
  );
}

export default App;
