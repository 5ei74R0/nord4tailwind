const plugin = require('tailwindcss/plugin')
import {
    nordColorsComprehensive,
    nordColorsDefaultName,
    nordColorsDefaultNumbering,
} from './src/colors.js';

const nordColorsForTailwind = {
    ...nordColorsDefaultName,
    nord: {
        ...nordColorsComprehensive,
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
