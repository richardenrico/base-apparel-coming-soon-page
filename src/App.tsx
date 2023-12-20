import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "Router";
import themeConfig from "themeConfig";
import '@mantine/core/styles.css';

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <MantineProvider
                theme={themeConfig}
            >
                <Router />
            </MantineProvider>
        </QueryClientProvider>
    );
}

export default App;
