import { QueryClient, QueryClientProvider } from "react-query";
import "./api/globals";
import { AppRouter } from "./routes/AppRouter";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter/>
    </QueryClientProvider>
  )
}

export default App;

