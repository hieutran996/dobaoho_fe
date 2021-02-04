import App from "next/app";
import { useRouter } from 'next/router'
import Head from "next/head";
import { createContext } from "react";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";

import '../common/css/bootstrap_css.css'
import '../common/css/index.css'
import '../common/css/login.css'
import '../common/css/site.css'
import '../common/css/style_dbh.css'
//recoil
import {
  RecoilRoot
} from 'recoil'

import { useEffect, useState } from 'react'
import { BackTop } from 'antd';
import Loading from '../components/loading/index'
//layout
import Header from '../common/layout/Header'
import ImageLazy from 'next/image'


// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;
  useEffect(() => {
    window.fbAsyncInit = function() {
      FB.init({
          xfbml            : true,
          version          : 'v9.0'
        });
      };

      (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    setTimeout(() => {
      var iframe_title = document.getElementsByTagName("iframe");
      for (let index = 0; index < iframe_title.length; index++) {
        iframe_title[index].title = "facebook_htweb_chat"
      }    
    }, 3000)
  }, [])
  

  //loading
  const router = useRouter()
  
  const [state, setState] = useState({
    isRouteChanging: false,
    loadingKey: 0,
  })
  useEffect(() => {
    const handleRouteChangeStart = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1,
      }))
    }

    const handleRouteChangeEnd = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }))
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeEnd)
    router.events.on('routeChangeError', handleRouteChangeEnd)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeEnd)
      router.events.off('routeChangeError', handleRouteChangeEnd)
    }
  }, [router.events])

  return (
    <RecoilRoot>
      <Loading isRouteChanging={state.isRouteChanging} key={state.loadingKey} />
      <Head>
        <meta charSet="utf-8" />
        <title>Quần Áo Bảo Hộ Lao Động, Găng Tay Bảo Hộ, Giày Ủng Bảo Hộ, Kính Bảo Hộ, Mũ Kính Bảo Hộ Lao Động. Trang Thiết Bị Bảo Hộ Lao Động Các Loại Tại Bảo</title>
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
        <meta property="og:url" content="https://dobaoho.store/" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="752469465517671" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Staatliches"
        />
      </Head>
      <GlobalContext.Provider value={global}>
        <Header />
        <Component {...pageProps} />
      </GlobalContext.Provider>
      <BackTop>
        <ImageLazy
          src={getStrapiMedia(global.img_global.img_totop)}
          alt="Lên đầu trang"
          className="scroll-top fade show"
          layout='fixed'
          width={52}
          height={52}
        />
      </BackTop>
      {/* facebook mess */}
      <div id="fb-root"></div>
      <div className="fb-customerchat"
        attribution="setup_tool"
        title="fb chat"
        page_id="870142283376883"
        logged_in_greeting="Hi!  Tôi có thể giúp gì cho bạn?"
        logged_out_greeting="Hi!  Tôi có thể giúp gì cho bạn?">
      </div>
    </RecoilRoot>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await fetchAPI("/global");
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
