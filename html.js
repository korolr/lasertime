import React from 'react'
import Helmet from 'react-helmet'

import { prefixLink } from 'gatsby-helpers'
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from './utils/typography'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
    propTypes() {
        return {
            body: React.PropTypes.string,
        }
    },
    render() {
        const head = Helmet.rewind()

        let css
        if (process.env.NODE_ENV === 'production') {
            css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
        }

        return (
            <html lang="ru">
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1.0"
                />
                {head.title.toComponent()}
                {head.meta.toComponent()}
                <TypographyStyle typography={typography} />
                <link href="https://fonts.googleapis.com/css?family=Arsenal" rel="stylesheet" />
                {/*<GoogleFont typography={typography} />*/}
                {css}
                <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180"
                      href="/favicon/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192"
                      href="/favicon/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32"
                      href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96"
                      href="/favicon/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16"
                      href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor"
                      content="#ffffff" />
                <meta name="msapplication-TileImage"
                      content="/favicon/ms-icon-144x144.png" />
                <meta name="theme-color"
                      content="#ffffff" />
            </head>
            <body>
            <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
            <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
            </body>
            </html>
        )
    },
})
