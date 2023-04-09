const plugin = require('tailwindcss/plugin')
import nordColorScheme from './colors'

module.exports = plugin(function ({ theme }) {

}, {
    theme: {
        extend: {
            colors: {
                nordColorScheme,
            }
        }
    }
})
