import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Play', sans-serif;
    }

    html {
        font-size: 20px; /* Increased base font size from 16px to 20px */
    }

    body {
        font-size: 1rem; /* Adjusts based on html's font-size (1rem = 20px) */
        line-height: 1.8; /* Increased line height for better readability */
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
        font-size: 1rem; /* Increased font size (relative to base) */
    }

    .layout {
        display: flex;
        flex-direction: row; /* Default layout: Horizontal */
        gap: 2.5rem; /* Increased spacing between elements */
        padding: 2.5rem; /* Increased padding */
    }

    .code-deck {
        flex: 1; /* Takes equal space as the playground by default */
    }

    .playground {
        flex: 2; /* Slightly larger space for the playground */
    }

    /* When window width is 50% of the screen (50vw or less), switch to column layout */
    @media (max-width: 50vw) {
        .layout {
            flex-direction: column; /* Switch to vertical layout */
        }
        .layout > * {
            padding: 1.5rem; /* Added padding for better spacing in vertical layout */
        }
    }
`;
