import { MantineProvider, Button, TextInput, Loader, Group, Checkbox, Radio, useMantineTheme, NavLink, Kbd, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useState } from 'react';
import { IconHome2 } from '@tabler/icons-react';
import './App.css';
import DarkMode from './components/DarkMode';
import GlobalStyle from './components/GlobalStyle';

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  const theme = useMantineTheme();
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withGlobalStyles withNormalizeCSS
        theme={{
          colorScheme: colorScheme,
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
        <GlobalStyle />
        <div className="App">
          <h1 style={{ marginTop: "0", padding: "1rem 0" }}>Hello, Mantine UI!</h1>
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
            <NavLink label="With icon" icon={<IconHome2 size="1rem" stroke={1.5} />} />
            <Kbd>⌘</Kbd> + <Kbd>shift</Kbd> + <Kbd>M</Kbd>
          </MantineProvider>
          <Group>
            <DarkMode />
          </Group>
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
