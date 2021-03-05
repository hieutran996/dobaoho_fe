import Link from "next/link"
import Image from 'next/image'
import moment from 'moment';
import { Breadcrumb } from 'antd'
import Layout from "../../components/layout";
import { getStrapiMedia } from "../../lib/media";
import { fetchAPI } from "../../lib/api";

const News = ({news}) => {
  return (
        <Layout>
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
                            Tin tức
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
                    <div className="page-title">
                        <h1>Tin tức</h1>
                    </div>
                    <div className="blog-wrapper" id="main">
                        <div className="site-content" id="primary">
                            <div role="main" id="content">
                                {
                                    news.map((value) => {
                                        return(
                                            <div className="blog_item" key={value._id}>
                                                <article className="blog_entry clearfix">
                                                    <div className="entry-content">
                                                    <div className="featured-thumb">
                                                        <Link href={`/new/${value.slug}`}>
                                                            <a title={value.name}>
                                                                <Image layout='responsive' width={100} height={60} className="lazyload loaded" src={getStrapiMedia(value.image)} alt={value.name} />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info_blo">
                                                        <h3 className="title_blog"><Link href={`/new/${value.slug}`}><a title={value.name}>{value.name}</a></Link></h3>
                                                        <time>
                                                        Ngày đăng: {moment(value.createdAt).format('DD/MM/YYYY')}
                                                        </time>
                                                        <div className="entry-content description_news_title">
                                                            {value.title}
                                                        </div>
                                                    </div>
                                                    </div>
                                                </article>
                                            </div>
                                        )
                                    })
                                }
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
                                        news.map((value) => {
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

export async function getStaticProps() {
    // Run API calls in parallel
    const [news] = await Promise.all([
      fetchAPI("/news")
    ]);
  
    return {
      props: {news},
      revalidate: 1,
    };
}

export default News;
