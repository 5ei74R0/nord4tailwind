const plugin = require('tailwindcss/plugin')
import {
    nordColorsDefaultName,
    nordColorsDefaultNumbering,
    nordColorsHumanReadable,
} from './src/colors.js';

const nordColorsForTailwind = {
    ...nordColorsDefaultName,
    nord: {
        ...nordColorsHumanReadable,
        ...nordColorsDefaultNumbering,
    },
};

module.exports = plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
        {
            colors: (value) => ({
                colors: value
            }),
        },
        { values: theme('colors') }
    )
}, {
    theme: {
        colors: {
            ...nordColorsForTailwind,
        },
    }
});
