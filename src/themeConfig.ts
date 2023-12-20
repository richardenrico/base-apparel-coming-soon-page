import { MantineThemeOverride, em } from '@mantine/core'
import { COLORS } from 'shared/utils/colors'

type ColorsShadeTuple = [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
]

function getCustomColors(colors: { [key: string]: string }): {
    [key: string]: ColorsShadeTuple
} {
    const finalColors: { [key: string]: ColorsShadeTuple } = {}
    const colorsName = Object.keys(colors)

    for (let i = 0; i < colorsName.length; i++) {
        finalColors[`${colorsName[i]}`] = new Array(10).fill(
            colors[colorsName[i]]
        ) as ColorsShadeTuple
    }

    return finalColors
}

const themeConfig: MantineThemeOverride = {
    breakpoints: {
        sm: em(640),
        md: em(768),
        lg: em(1024),
        xl: em(1280),
    },
    colors: {
        ...getCustomColors(COLORS),
    },
    fontFamily: 'Josefin Sans, sans-serif',
}

export default themeConfig
