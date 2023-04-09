const plugin = require('tailwindcss/plugin')
import nordColorScheme from './colors'

nord4TailwindPlugin = plugin(function ({ theme }) {

}, {
    theme: {
        extend: {
            colors: {
                nordColorScheme,
            }
        }
    }
})

module.exports = nord4TailwindPlugin