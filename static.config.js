/* eslint-disable react/prop-types, react/no-danger */
import React, { Component, Fragment } from 'react'
import { ServerStyleSheet } from 'styled-components'

const googleAnalytics = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-119617889-1');
`

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () =>
    // const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      // {
      //   path: '/about',
      //   component: 'src/containers/About',
      // },
      // {
      //   path: '/blog',
      //   component: 'src/containers/Blog',
      //   getData: () => ({
      //     posts,
      //   }),
      //   children: posts.map(post => ({
      //     path: `/post/${post.id}`,
      //     component: 'src/containers/Post',
      //     getData: () => ({
      //       post,
      //     }),
      //   })),
      // },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ],
  renderToHtml: (render, Comp, meta, webpackStats) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    /* eslint-disable no-param-reassign */
    meta.styleTags = sheet.getStyleElement()
    meta.productionBuild = !!webpackStats
    /* eslint-enable */
    return html
  },
  // eslint-disable-next-line
  Document: class CustomHtml extends Component {
    render() {
      /* eslint-disable react/prop-types */
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props
      /* eslint-enable */

      return (
        <Html>
          <Head>
            {renderMeta.productionBuild && (
              <Fragment>
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-119617889-1" />
                <script dangerouslySetInnerHTML={{ __html: googleAnalytics }} />
              </Fragment>
            )}

            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
            <title>Trevor Wright | Full Stack Web Developer</title>
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
