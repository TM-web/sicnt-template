import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout, LazyLoad } from "./components";
import RoutesList from "./pages/Routes";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <div className={"App"}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Suspense fallback={<LazyLoad />}>
            <RoutesList />
          </Suspense>
        </Layout>
      </QueryClientProvider>
    </div>
  );
}

export default App;
