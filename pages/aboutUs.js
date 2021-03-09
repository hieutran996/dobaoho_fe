import { Breadcrumb } from 'antd'
import Link from "next/link"
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const AboutUs = () => {

    const seo = {
        metaTitle: "Giới thiệu về đồ bảo hộ Hiếu Trần",
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
                            Giới thiệu
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    </div>
                </div>
                </div>
            </section>  
            <div className="main-container col2-left-layout">
                <div className="container page">
                <div className="main">
                    <div className="page-title">
                    <h1>Giới thiệu</h1>
                    </div>
                    <div className="rte">
                    <p>Đồ bảo hộ Hiếu Trần là đơn vị chuyên phân phối mũ bảo hiểm cao cấp và đồ bảo hộ cho người đi xe mô tô, xe gắn máy. Chúng tôi lựa chọn, sàng lọc kĩ càng những thương hiệu uy tín, sản phẩm chất lượng đạt tiêu chuẩn an toàn quốc tế, để mang đến cho người tiêu dùng sự an toàn khi tham gia giao thông, gồm LS2, BULLDOG, YOHE,EGO, ZEUS.</p>
                    <p>Chúng tôi luôn nổ lực cung cấp đầy đủ nhất các thiết bị bảo hộ và thời trang cho Biker. Hiện tại, chúng tôi đang đa dạng hóa chủng loại, thương hiệu mũ bảo hiểm đáp ứng mọi nhu cầu từ các tay đua chuyên nghiệp cho đến người yêu moto nghiệp dư. Trong tương lai không xa, chúng tôi sẽ cung cấp một cách chuyên nghiệp: găng tay, boot, giáp, quần áo bảo hộ, quần áo thời trang phong cách Biker...</p>
                    <p>Sứ mệnh của chúng tôi là thỏa mãn nhu cầu an toàn, thể hiện đẳng cấp và phong cách thời trang cho cộng đồng Biker.</p>
                    </div>
                </div>
                </div>
            </div>
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

export default AboutUs;
