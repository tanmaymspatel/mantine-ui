import { Global } from '@mantine/core';

function GlobalStyle() {
    return (
        <Global
            styles={() => ({
                '*, *::before, *::after': {
                    boxSizing: 'border-box',
                },
                'html,body,#root,.App': {
                    height: "100%"
                },
                'html,body': {
                    overflow: "hidden"
                }
            })}
        />
    )
}

export default GlobalStyle;
