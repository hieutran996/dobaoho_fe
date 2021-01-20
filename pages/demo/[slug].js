import {useState} from 'react'
import Link from "next/link"
import { useRouter } from 'next/router'
import { fetchAPI } from "../../lib/api";
import Seo from "../../components/seo";
import Layout from "../../components/layout";


const Demo = ({themes}) => {
  if (!themes.url) {
    return (
      <Layout footer={false}>
        <div className="page-container">
          <div className="themes-list">
            <div className="index-title login-box">
              <div className="container">
                <h1>Giao diện đang được cập nhật...</h1>
                <p className="desc">Vui lòng quay lại sau</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
  const seo = {
    metaTitle: themes.name,
    metaDescription: themes.slug,
    shareImage: themes.image,
    checkSeo: true,
  };
  const [view, setView] = useState(1)
  const router = useRouter()


  return (
    <div id="view-demo" className="view-demo">
      <Seo seo={seo} />
      <div className="demo-header">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
                <span  className="view-back" onClick={() => router.back()}>
                  <i className="icon-view-back" />
                  Quay lại
                </span>
            </div>
            <div className="col-lg-5 d-none d-lg-flex justify-content-center align-items-center view-type">
              <span className={"type-item desktop" + (view === 1 ? ' current' : '')} onClick={() => setView(1)}>
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 0H2C.897 0 0 .897 0 2v8c0 1.103.897 2 2 2h4.667v2h-2c-.552 0-1 .447-1 1 0 .553.448 1 1 1h6.667c.552 0 1-.447 1-1 0-.553-.448-1-1-1h-2v-2H14c1.104 0 2-.897 2-2V2c0-1.103-.896-2-2-2zM2 10V2h12v8H2z" />
                </svg>
                Desktop
              </span>
              <span className={"type-item mobile" + (view === 3 ? ' current' : '')} onClick={() => setView(3)}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.7 0H6.3C5.6 0 5 .6 5 1.3v21.3c0 .8.6 1.4 1.3 1.4h12.3c.7 0 1.4-.587 1.4-1.287V1.3c0-.7-.6-1.3-1.3-1.3zm-6.2 22.6c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3zm4.5-4c0 .2-.2.4-.4.4H8.4c-.2 0-.4-.2-.4-.4V3.4c0-.2.2-.4.4-.4h8.1c.3 0 .5.2.5.4v15.2z" />
                </svg>
                Mobile
              </span>
              <span className={"type-item tablet" + (view === 2 ? ' current' : '')} onClick={() => setView(2)}>
                <svg height={48} viewBox="0 0 48 48" width={48} xmlns="http://www.w3.org/2000/svg">
                  <path d="M37 0h-28c-2.76 0-5 2.24-5 5v38c0 2.76 2.24 5 5 5h28c2.76 0 5-2.24 5-5v-38c0-2.76-2.24-5-5-5zm-14 46c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm15-8h-30v-32h30v32z" />
                </svg>
                Tablet
              </span>
            </div>
            <div className="col-6 col-md-6 col-lg-4 text-right" style={{lineHeight: '35px'}}>
              <Link href="/contact">
                <a className="d-none d-md-inline-block btn-registration banner-home-registration event-Template-apply-form-open">Liên hệ sử dụng</a>      
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="demo-wrapper" className="desktop-view">
        <div id="demo-container" className={view === 1 ? ' desktop' : view === 2 ? ' tablet' : 'mobile' }>
          <iframe id="frame" src={themes.url} title="demo thiết kế web chuyên nghiệp" />
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const themes = await fetchAPI("/themes");
  return {
    paths: themes.map((theme) => ({
      params: {
        slug: theme.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const themes = (await fetchAPI(`/themes?slug=${params.slug}`));
  return {
    props: { themes: themes[0]  },
    revalidate: 1,
  };
}

export default Demo;
