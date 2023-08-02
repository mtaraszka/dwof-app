import { QueryClient, QueryClientProvider } from "react-query";
import "./api/axios-defaults";
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

