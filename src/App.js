import { Button, createStyles, MantineProvider } from "@mantine/core";
import Layout from "./Layout";

function App() {
  return (
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <Layout />
    </MantineProvider>
  );
}

export default App;
