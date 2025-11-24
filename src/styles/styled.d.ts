/* eslint-disable @typescript-eslint/no-empty-object-type */

import 'styled-components';

export type AppTheme = {
    breakpoints: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    colors: object;
    shadows: object;
    fonts: {
        size: object;
        weight: object;
        other: object;
    };
};

declare module 'styled-components' {
    export interface DefaultTheme extends AppTheme {}
}
