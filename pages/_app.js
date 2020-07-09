import '../styles/globals.css'

import Head  from 'next/head'
import { MDXProvider } from '@mdx-js/react'

const mdxComponents = {}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Root System</title>
        <meta 
          name="Description" 
          content="We help startup founders de-risk their product/technology by designing & building high-quality software and high-functioning engineering organizations." 
        />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700;900&display=swap" rel="stylesheet" />
        {/* <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
      </Head>
      <MDXProvider components={mdxComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  )
}