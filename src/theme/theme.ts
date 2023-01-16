import { createStitches, globalCss } from "@stitches/react";
import {
    gray,
    blue,
    red,
    green,
    cyan,
    cyanA,
    grayDark,
    blueDark,
    redDark,
    greenDark,
    cyanDark,
    cyanDarkA,
} from '@radix-ui/colors';
export const { styled, createTheme } = createStitches({
    theme: {
        colors: {
            ...gray,
            ...blue,
            ...red,
            ...green,
            ...cyan,
            ...cyanA,
            hiContrast: 'hsl(206,8%,8%)',
            loContrast: 'hsl(206,2%,93%)',
            background: 'hsl(184deg 100% 98%)',
            body: 'hsl(186deg 49% 84%)',
        },
        space: {
            1: '5px',
            2: '10px',
            3: '15px',
        },
        fontSizes: {
            1: '12px',
            2: '13px',
            3: '15px',
        },
        fonts: {
            untitled: 'Untitled Sans, apple-system, sans-serif',
            mono: 'Söhne Mono, menlo, monospace',
            main: 'Söhne, apple-system, sans-serif',

        },
        fontWeights: {},
        lineHeights: {},
        letterSpacings: {},
        sizes: {},
        borderWidths: {},
        borderStyles: {},
        radii: {},
        shadows: {
            ...gray,
            ...blue,
            ...red,
            ...green,
            ...cyan,
            ...cyanA,
        },
        zIndices: {},
        transitions: {},
    }
})

export const darkTheme = createTheme({
    colors: {
        ...grayDark,
        ...blueDark,
        ...redDark,
        ...greenDark,
        ...cyanDark,
        ...cyanDarkA,
        hiContrast: 'hsl(206,2%,93%)',
        loContrast: 'hsl(206,8%,8%)',

        gray100: 'hsl(206,8%,12%)',
        gray200: 'hsl(206,7%,14%)',
        gray300: 'hsl(206,7%,15%)',
        gray400: 'hsl(206,7%,24%)',
        gray500: 'hsl(206,7%,30%)',
        gray600: 'hsl(206,5%,53%)',
    },
    shadows: {
        ...grayDark,
        ...blueDark,
        ...redDark,
        ...greenDark,
        ...cyanDark,
        ...cyanDarkA,
    }
});


const globalStyles = globalCss({
    html: {
        margin: 0, padding: 0,
        backgroundColor: '$body',
    },
    body: {
        margin: 0, padding: 0,
        // backgroundColor: '$body',
    },
});
globalStyles();