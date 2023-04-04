import { MantineProvider, Button, TextInput, Loader, Group, Checkbox, Radio, useMantineTheme } from '@mantine/core';
import './App.css';

function App() {
  const theme = useMantineTheme();
  return (
    <div className="App">
      <MantineProvider withGlobalStyles withNormalizeCSS
        theme={{
          fontFamily: 'monospace',
          // colorScheme: 'dark',
          primaryColor: 'grape',
          // defaultRadius: "lg",
          radius: {
            md: "1rem",
          },
          fontSizes: {
            md: "0.6rem"
          },
          headings: {
            fontFamily: 'Roboto, sans-serif',
            sizes: {
              h1: { fontSize: '20rem' }
            }
          },
          // focusRingStyles: {
          //   styles: (theme) => ({ outline: `${rem(2)} solid ${theme.colors.orange[5]}` })
          // }
          defaultGradient: {
            from: 'blue',
            to: 'red',
            deg: 90,
          },
          loader: "dots",
          cursorType: "pointer",
        }}>
        <h1>Hello, Mantine UI!</h1>
        <Button>Click me!</Button>
        <h4>Hello, simple text!</h4>
        <TextInput my="xl" placeholder="Focus input to see styles override" />
        <Button variant='gradient'>Gradient!</Button>
        <Loader size="md" />
        <Group mt="xl">
          <Checkbox label="Default checkbox" />
          <Radio label="Default radio" value="pointer" />
        </Group>
        <p style={{ background: theme.colors.blue[9] }}>hello, useMantinetheme hook</p>
        <MantineProvider theme={{ fontFamily: 'Greycliff CF, sans-serif', primaryColor: "cyan", loader: "bars" }}>
          <Button my="xl">Greycliff CF button</Button>
          <Loader size="md" color='grape' />
        </MantineProvider>
      </MantineProvider>
    </div>
  );
}

export default App;
