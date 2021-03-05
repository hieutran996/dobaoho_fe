import { Breadcrumb } from 'antd'
import Link from "next/link"
import MDReactComponent from 'markdown-react-js';
import Image from 'next/image'
import Layout from "../../components/layout";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import Seo from "../../components/seo"

const News = ({news,allNews}) => {
    const seo = {
      metaTitle: news.name,
      metaDescription: news.slug,
      shareImage: news.image,
      checkSeo: true,
    };

    return (
        <Layout>
            <Seo seo={seo} />
            <section className="bread-crumb">
                <span className="crumb-border" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-xs-12 a-left">
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <Link href="/">Trang chủ</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <Link href="/new">Tin tức</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                {news.name}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        </div>
                    </div>
                </div>
            </section>  
            <section className="col2-right-layout">
                <div className="main container main-blog margin-bottom-30">
                    <div className="row">
                        <div className="col-main col-md-9 col-xs-12">
                            <div className="blog-wrapper" id="main">
                                <div className="site-content" id="primary">
                                    <div role="main" id="content">
                                        <MDReactComponent text={news.description} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <aside className="col-right sidebar col-md-3 col-xs-12 wow bounceInRight animated mt-sm-5">
                            <div className="blog-mini">
                                <h2 className="title">
                                    <a href="tin-tuc" title="Bài viết khác">
                                        Bài viết khác
                                    </a>
                                </h2>
                                <div className="content latest-blog">
                                    <div className="list clearfix">
                                        {
                                            allNews.map((value) => {
                                                if (value._id !== news._id) {
                                                    return(
                                                        <div className="item clearfix" key={value._id}>
                                                            <div className="blog-thumb">
                                                                <Link href={`/new/${value.slug}`}>
                                                                    <a title={value.name}>
                                                                        <Image layout='responsive' width={100} height={65} src={getStrapiMedia(value.image)} className="lazyload loaded" alt={value.name} />
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                            <div className="blog-content">
                                                                <h3><Link href={`/new/${value.slug}`}><a title={value.name}>{value.name}</a></Link></h3>
                                                            </div>
                                                        </div>
                                                    )
                                                } 
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export async function getStaticPaths() {
    const news = await fetchAPI("/news");
    return {
      paths: news.map((newData) => ({
        params: {
          slug: newData.slug,
        },
      })),
      fallback: false,
    };
}
  
export async function getStaticProps({ params }) {
    const allNews = await fetchAPI(`/news`);
    const news = await fetchAPI(`/news?slug=${params.slug}`);

    return {
    props: { news: news[0], allNews},
    revalidate: 1,
    };
}

export default News;
