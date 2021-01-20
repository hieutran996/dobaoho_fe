//animation
import Flip from 'react-reveal/Flip'
import Layout from "../../components/layout";
import Contact from '../../common/contact'
import Seo from "../../components/seo";
//image
import ImageLazy from 'next/image'
//api
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import Link from "next/link";

const Home = ({ list_store }) => {
    const seo = {
        metaTitle: 'Liên hệ HT Web - Chuyên thiết kế website',
        metaDescription: 'Liên hệ HT Web - Chuyên thiết kế website',
        checkSeo: true,
    };
    return (
        <Layout>
            <Seo seo={seo} />
            <div className="price-sapoweb index-container mb-5" id="contact">
                <div className="banner text-center ">
                <div className="container">
                    <h1>Liên hệ với chúng tôi để sở hữu và trải nghiệm những dịch vụ web tuyệt vời nhất</h1>
                    <p>Sở hữu một website chuẩn SEO với đầy đủ tính năng bán hàng online</p>
                </div>
                </div>
                <div className="packages not-border text-center ">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-xl-12 col-12">
                        <Contact />
                    </div>
                    </div>
                </div>
                </div>
                <div className="text-center favorite-themes mb-5">
                <div className="container">
                    <h2 className="text-center">Tham khảo các website đẹp của khách hàng chúng tôi</h2>
                    <p>Hơn 67.000 khách hàng tin tưởng và thiết kế web bán hàng với HT Web</p>
                    <div className="row justify-content-center mt-5">
                    <div className="col-xl-10">
                        <Flip left cascade>
                            <div className="row">
                            {
                            list_store.themes.map((val,i) => {
                                if (i > 5) return 
                                return(
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" key={i}>
                                    <div className="theme-item responsive">
                                    <div className="theme-image">
                                        <ImageLazy
                                        src={getStrapiMedia(val.image)}
                                        alt={val.name}
                                        layout='fill' 
                                        />
                                        <div className="theme-action">
                                        <div className="button">
                                            <Link as={`/demo/${val.slug}`} href="/demo/[slug]">
                                            <a className="view-demo action-preview-theme btn-registration">
                                                Xem thử
                                            </a>
                                            </Link>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="theme-info">
                                        <h3>
                                        <Link as={`/demo/${val.slug}`} href="/demo/[slug]">
                                            <a className="title">
                                            {val.name}
                                            </a>
                                        </Link>
                                        </h3>
                                    </div>
                                    </div>
                                </div>
                                )
                            })
                            }
                            </div>
                        </Flip >
                        <Link href="/store/top-giao-dien">
                            <a rel="nofollow" className="btn-registration">
                            <Flip left cascade>
                                Xem thêm giao diện
                            </Flip>
                            </a>
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </Layout>
    );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [list_store] = await Promise.all([
    fetchAPI("/stores?slug=top-giao-dien")
  ]);

  return {
    props: { list_store: list_store[0] },
    revalidate: 1,
  };
}

export default Home;
