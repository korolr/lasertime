import ReactDOM from 'react-dom/server'
import React from 'react'
import Typography from 'typography'
import { GoogleFont } from 'react-typography'


const options = {
    googleFonts: [
        {
            name: 'Arsenal',
            styles: [
                '400',
                '400i',
                '700',
            ]
        }
    ],
    headerFontFamily: ['Arsenal', 'sans-serif'],
    bodyFontFamily: ['Arsenal', 'sans-serif'],
    baseFontSize: '18px',
    baseLineHeight: 1.65,
    scale: 2.25,
    plugins: [],
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
    typography.injectStyles()
    if (typeof document !== 'undefined') {
        const googleFonts = ReactDOM.renderToStaticMarkup(
            React.createFactory(GoogleFont)({ typography })
        )
        const head = document.getElementsByTagName('head')[0]
        head.insertAdjacentHTML('beforeend', googleFonts)
    }
}

export default typography
