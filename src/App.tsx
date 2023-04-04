import { MantineProvider, Button, TextInput, Loader } from '@mantine/core';
import './App.css';

function App() {
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
          loader: "dots"
        }}>
        <h1>Hello, Mantine UI!</h1>
        <Button>Click me!</Button>
        <h4>Hello, simple text!</h4>
        <TextInput placeholder="Focus input to see styles override" />
        <Button variant='gradient'>Gradient!</Button>
        <Loader size="md" />
      </MantineProvider>
    </div>
  );
}

export default App;
