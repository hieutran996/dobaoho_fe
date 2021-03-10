import { useEffect, useState } from "react"
import Image from 'next/image'
import Link from "next/link"
import { Tabs,InputNumber,Breadcrumb,Select } from 'antd'
import MDReactComponent from 'markdown-react-js';
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media"
import Layout from "../../components/layout";
import Seo from "../../components/seo"



const { TabPane } = Tabs;

const { Option } = Select;

const limit = 8

const Detail = ({product,product_hot}) => {
    const [state, setState] = useState({
        crrThemes: [],
        activePage: 1,
        loading: true,
    })

    useEffect(() => {
        var mq;
        function mQ() {
            mq = window.matchMedia("(min-width: 1024px)")
        }
        mQ()
        if (mq.matches) {
            let imgID = 'imageZoom'
            let zoom = 1.5
            var img, glass, w, h, bw;
                img = document.getElementById(imgID);
                /*create magnifier glass:*/
                glass = document.createElement("DIV");
                glass.setAttribute("class", "img-magnifier-glass");
                /*insert magnifier glass:*/
                img.parentElement.insertBefore(glass, img);
                /*set background properties for the magnifier glass:*/
                glass.style.backgroundImage = "url('" + img.src + "')";
                glass.style.backgroundRepeat = "no-repeat";
                glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
                bw = 3;
                w = glass.offsetWidth / 2;
                h = glass.offsetHeight / 2;
                /*execute a function when someone moves the magnifier glass over the image:*/
                glass.addEventListener("mousemove", moveMagnifier);
                img.addEventListener("mousemove", moveMagnifier);
                /*and also for touch screens:*/
                glass.addEventListener("touchmove", moveMagnifier);
                img.addEventListener("touchmove", moveMagnifier);
                function moveMagnifier(e) {
                var pos, x, y;
                /*prevent any other actions that may occur when moving over the image*/
                e.preventDefault();
                /*get the cursor's x and y positions:*/
                pos = getCursorPos(e);
                x = pos.x;
                y = pos.y;
                /*prevent the magnifier glass from being positioned outside the image:*/
                if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
                if (x < w / zoom) {x = w / zoom;}
                if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
                if (y < h / zoom) {y = h / zoom;}
                /*set the position of the magnifier glass:*/
                glass.style.left = (x - w) + "px";
                glass.style.top = (y - h) + "px";
                /*display what the magnifier glass "sees":*/
                glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
                }
                function getCursorPos(e) {
                var a, x = 0, y = 0;
                e = e || window.event;
                /*get the x and y positions of the image:*/
                a = img.getBoundingClientRect();
                /*calculate the cursor's x and y coordinates, relative to the image:*/
                x = e.pageX - a.left;
                y = e.pageY - a.top;
                /*consider any page scrolling:*/
                x = x - window.pageXOffset;
                y = y - window.pageYOffset;
                return {x : x, y : y};
            }
        }
        
    }, [])

    const seo = {
      metaTitle: product.name,
      metaDescription: product.name,
      shareImage: product.image[0],
      checkSeo: true,
    };

       

    const onChangeInput = (value) => {
        console.log('changed', value);
    }

    const handleChange = (value) => {
        console.log('changed', value);
    }

    return (
        <Layout>
            <Seo seo={seo} />
            <div id="detail_product">
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
                                    <Link href="/product"><a>Sản phẩm</a></Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    {product.name}
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            </div>
                        </div>
                    </div>
                </section>  
                <div>
                    <section className="main-product margin-bottom-20">
                    <div className="main container pt-0">
                        <div className="col-main details-product">
                        <div className="product-view form-product clearfix">
                            <div className="row">
                                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 product-left">
                                    <div className="inner">
                                        <div className="product-essential">
                                            <div className="row">
                                            <div className="product-img-box col-sm-6 col-xs-12 col-md-6 col-lg-6">
                                                <div className="product-detail-left product-images">
                                                <div className="col_large_default large-image">
                                                    <a href="#/" className="large_image_url checkurl">
                                                        <div style={{height: '388px', width: '388px'}} className="zoomWrapper img-magnifier-container">
                                                            <img id="imageZoom" className="img-responsive" alt={product.name} src={getStrapiMedia(product.image[0])} style={{position: 'absolute', width: '388px', height: '388px'}} />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="thumb_gallary">
                                                    <div id="gallery_02" className="ons owl_width no-padding thumbnail-product thumb_product_details slick_margin slick-initialized slick-slider" style={{}}>
                                                        <div aria-live="polite" className="slick-list draggable">
                                                            <div className="slick-track" role="listbox" style={{opacity: 1, width: '325px', transform: 'translate3d(0px, 0px, 0px)'}}>
                                                                {
                                                                    product.image.map((value) => {
                                                                        return(
                                                                            <div className="item slick-slide slick-current slick-active"  style={{width: '97px'}} key={value._id}>
                                                                                <a title={product.name} className="active">
                                                                                    <Image layout='fill' src={getStrapiMedia(value)} alt={product.name} />
                                                                                </a>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="product-shop col-sm-6 col-xs-12 col-md-6 col-lg-6 details-pro">
                                    <div className="bg-zz">
                                        <div className="product-name">
                                            <h1>{product.name}</h1>
                                        </div>
                                        <div className="price-block">
                                            <div className="price-box" itemProp="offers" itemScope itemType="http://schema.org/Offer">
                                            <div className="special-price"><span className="price product-price">{product.price}₫</span> 
                                                <meta itemProp="price" />
                                                <meta itemProp="priceCurrency" content="VND" />
                                            </div>
                                            <link itemProp="availability" href="http://schema.org/InStock" />
                                            <meta itemProp="url" content="https://nd-tool.mysapo.net/may-thoi-khi-co-day-khong-day-20v-max" />
                                            </div>
                                        </div>
                                        <div className="tt">
                                            <div className="inventory_quantity">
                                            <span className="stock-brand-title"><strong>Tình trạng:</strong></span>
                                            <span className="a-stock">Còn hàng</span>
                                            </div>
                                            <div className="product_sku" id="sku">
                                                <span className="fnew">Mã sản phẩm:</span> {product.slug}
                                            </div>
                                            {
                                                product.size 
                                                &&
                                                <>
                                                    <div className="field field--show-floating-label p-0 mb-3">
                                                        <div className="field__input-wrapper field__input-wrapper--select2">
                                                        <label htmlFor="billingProvince" className="fnew">Kích thước: </label>
                                                        
                                                        </div>
                                                    </div>
                                                    <Select
                                                            style={{ width: "20%" }}
                                                            defaultValue="S"
                                                            optionFilterProp="children"
                                                            filterOption={(input, option) =>
                                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                            }
                                                        >   
                                                            {
                                                                ['S', 'M', 'L', 'XL', 'XXL'].map((value,index) => {
                                                                    return(
                                                                        <Option key={index}>{value}</Option>
                                                                    )
                                                                })
                                                            }
                                                    </Select>
                                                </>
                                            }
                                            <div className="add-to-box form-product ">
                                            <div className="add-to-cart">
                                                <form action="/cart/add" method="post" encType="multipart/form-data" id="add-to-cart-form" className="form-inline">
                                                    <div className="box_buy ">
                                                        <label className="hqty hidden-xs fixprice box">Số lượng</label>
                                                        <div className="hqty ct2 pull-left fixprice box">
                                                        <div className=" pull-left">
                                                            <InputNumber size="large" min={1} defaultValue={1} onChange={onChangeInput} />
                                                        </div>
                                                        </div>
                                                        <div className="pull-left ct2 fixprice">
                                                        <button className="button btn-cart add_to_cart" title="Thêm vào giỏ hàng">
                                                            <span>Thêm vào giỏ hàng</span>
                                                        </button>
                                                        <a className="buy-now">Mua ngay</a>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="product-collateral margin-top-20 clearfix">
                                    <div className="bg clearfix">
                                        <Tabs >
                                            <TabPane tab="Thông tin chi tiết" key="1">
                                                <MDReactComponent text={product.description} /> 
                                            </TabPane>
                                            {/* <TabPane tab="Hướng dẫn mua hàng" key="2">
                                                <p>Content of Tab Pane 2</p>
                                                <p>Content of Tab Pane 2</p>
                                                <p>Content of Tab Pane 2</p>
                                            </TabPane> */}
                                        </Tabs>
                                        <div id="productTabContent" className="tab-content">
                                            <div className="tab-pane fade in active show" id="product_tabs_description">
                                            <div className="rte">
                                                <div id="content">
                                                <p>Máy thổi khí có dây / không dây 20V MAX * của chúng tôi có thể chạy trên bất kỳ một trong ba nguồn điện ** để có tính linh hoạt tối đa: pin 20V MAX *, 12V DC hoặc 110V AC. Sử dụng nó trên công trường hoặc khi đang di chuyển. Nó có một ống cao su áp suất cao cho độ bền. Mâm cặp có ren và các phụ kiện đi kèm giúp bạn dễ dàng bơm phồng các vật dụng từ lốp xe đến bóng đá. Việc đặt áp suất không khí mong muốn thật đơn giản với đồng hồ đo kỹ thuật số và tính năng tự động ngắt cung cấp mức lạm phát chính xác. Ống có khối lượng lớn cho phép đệm và các vật liệu bơm phồng khác được thổi phồng nhanh chóng chỉ bằng một nút nhấn. Di chuyển vòi đến cổng xả hơi để tháo nhanh chóng và dễ dàng. Đèn LED trên bo mạch giúp chiếu sáng trong không gian tối. Chân cao su chịu lực giúp giảm việc đi lại trong khi sử dụng. ** Pin, bộ sạc và bộ đổi nguồn AC được bán riêng.</p>
                                                </div>
                                                <div className="read-more more hidden">
                                                <span>Xem thêm</span>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="tab-pane fade" id="product_tabs_custom">
                                            <div className="product-tabs-content-inner clearfix">
                                                <p>Nội dung đang được cập nhật</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 product-right">
                                <div className="policy-product">
                                <div className="item">
                                    <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 476 476" style={{enableBackground: 'new 0 0 476 476'}} xmlSpace="preserve">
                                        <g>
                                        <path d="M400.85,181v-18.3c0-43.8-15.5-84.5-43.6-114.7c-28.8-31-68.4-48-111.6-48h-15.1c-43.2,0-82.8,17-111.6,48   c-28.1,30.2-43.6,70.9-43.6,114.7V181c-34.1,2.3-61.2,30.7-61.2,65.4V275c0,36.1,29.4,65.5,65.5,65.5h36.9c6.6,0,12-5.4,12-12   V192.8c0-6.6-5.4-12-12-12h-17.2v-18.1c0-79.1,56.4-138.7,131.1-138.7h15.1c74.8,0,131.1,59.6,131.1,138.7v18.1h-17.2   c-6.6,0-12,5.4-12,12v135.6c0,6.6,5.4,12,12,12h16.8c-4.9,62.6-48,77.1-68,80.4c-5.5-16.9-21.4-29.1-40.1-29.1h-30   c-23.2,0-42.1,18.9-42.1,42.1s18.9,42.2,42.1,42.2h30.1c19.4,0,35.7-13.2,40.6-31c9.8-1.4,25.3-4.9,40.7-13.9   c21.7-12.7,47.4-38.6,50.8-90.8c34.3-2.1,61.5-30.6,61.5-65.4v-28.6C461.95,211.7,434.95,183.2,400.85,181z M104.75,316.4h-24.9   c-22.9,0-41.5-18.6-41.5-41.5v-28.6c0-22.9,18.6-41.5,41.5-41.5h24.9V316.4z M268.25,452h-30.1c-10,0-18.1-8.1-18.1-18.1   s8.1-18.1,18.1-18.1h30.1c10,0,18.1,8.1,18.1,18.1S278.25,452,268.25,452z M437.95,274.9c0,22.9-18.6,41.5-41.5,41.5h-24.9V204.8   h24.9c22.9,0,41.5,18.6,41.5,41.5V274.9z" />
                                        </g>
                                    </svg>
                                    </div>
                                    <div className="info">
                                    <h3>
                                        Hỗ trợ 24/7
                                    </h3>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
                                        <g>
                                        <g>
                                            <path d="M288.502,32.502c-108.328,0-198.827,77.485-219.166,179.899l-42.482-53.107L0,180.784l68.769,85.961    c3.352,4.178,8.338,6.447,13.427,6.447c2.596,0,5.226-0.585,7.685-1.805l103.153-51.577l-15.387-30.757l-75.8,37.892    c14.063-90.5,92.27-160.059,186.655-160.059c104.271,0,189.114,84.843,189.114,189.114s-84.843,189.114-189.114,189.114v34.384    C411.735,479.498,512,379.233,512,256S411.735,32.502,288.502,32.502z" />
                                        </g>
                                        </g>
                                    </svg>
                                    </div>
                                    <div className="info">
                                    <h3>
                                        Dễ dàng đổi trả
                                    </h3>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="479pt" viewBox="0 0 479 479.84995" width="479pt"><path d="m293.773438 195.351562-72.097657 68.097657-34.601562-35.597657c-3.835938-3.949218-10.152344-4.039062-14.097657-.203124-3.949218 3.839843-4.039062 10.152343-.203124 14.101562l41.5 42.601562c3.855468 3.878907 10.085937 4.011719 14.101562.296876l79.300781-74.796876c1.925781-1.816406 3.050781-4.324218 3.125-6.96875.074219-2.644531-.90625-5.210937-2.726562-7.132812-3.859375-4.011719-10.222657-4.1875-14.300781-.398438zm0 0" /><path d="m240.273438 90.550781c-82.398438 0-149.398438 67-149.398438 149.398438 0 82.402343 67 149.402343 149.398438 149.402343 82.402343 0 149.402343-67 149.402343-149.402343 0-82.398438-67-149.398438-149.402343-149.398438zm0 278.800781c-71.398438 0-129.398438-58.101562-129.398438-129.402343s58-129.398438 129.398438-129.398438c71.46875 0 129.402343 57.933594 129.402343 129.398438 0 71.464843-57.933593 129.402343-129.402343 129.402343zm0 0" /><path d="m445.875 184.949219 3.300781-59.300781c.230469-3.980469-1.933593-7.71875-5.5-9.5l-52.800781-26.699219-26.699219-52.800781c-1.816406-3.535157-5.53125-5.6875-9.5-5.5l-59.402343 3.203124-49.5-32.703124c-3.335938-2.199219-7.660157-2.199219-11 0l-49.5 32.703124-59.296876-3.300781c-3.984374-.234375-7.71875 1.929688-9.5 5.5l-26.703124 52.800781-52.796876 26.699219c-3.539062 1.8125-5.6875 5.527344-5.5 9.5l3.296876 59.300781-32.699219 49.5c-2.199219 3.335938-2.199219 7.660157 0 11l32.601562 49.597657-3.300781 59.300781c-.230469 3.980469 1.929688 7.71875 5.5 9.5l52.800781 26.699219 26.699219 52.800781c1.8125 3.539062 5.527344 5.6875 9.5 5.5l59.300781-3.300781 49.5 32.699219c3.316407 2.269531 7.683594 2.269531 11 0l49.5-32.699219 59.300781 3.300781c3.980469.230469 7.714844-1.933594 9.5-5.5l26.699219-52.800781 52.800781-26.699219c3.535157-1.816406 5.6875-5.527344 5.5-9.5l-3.300781-59.300781 32.699219-49.5c2.199219-3.335938 2.199219-7.664063 0-11zm-18.601562 101.800781c-1.21875 1.789062-1.785157 3.941406-1.597657 6.101562l3.097657 56.097657-49.898438 25.199219c-1.902344.953124-3.445312 2.5-4.398438 4.402343l-25.203124 49.898438-56.097657-3.097657c-2.148437-.078124-4.269531.476563-6.101562 1.597657l-46.800781 30.902343-46.796876-30.902343c-1.625-1.097657-3.539062-1.691407-5.5-1.699219h-.5l-56.101562 3.101562-25.199219-49.902343c-.953125-1.902344-2.496093-3.445313-4.402343-4.398438l-50-25.101562 3.101562-56.097657c.078125-2.148437-.480469-4.269531-1.601562-6.101562l-30.898438-46.800781 30.898438-46.800781c1.222656-1.785157 1.789062-3.941407 1.601562-6.097657l-3.101562-56.101562 49.902343-25.199219c1.902344-.953125 3.445313-2.496094 4.398438-4.398438l25.199219-49.902343 56.101562 3.101562c2.144531.074219 4.265625-.480469 6.101562-1.601562l46.796876-30.898438 46.800781 30.898438c1.789062 1.222656 3.945312 1.789062 6.101562 1.601562l56.097657-3.101562 25.203124 49.902343c.953126 1.902344 2.496094 3.445313 4.398438 4.398438l49.898438 25.199219-3.097657 56.101562c-.078125 2.144531.480469 4.265625 1.597657 6.097657l30.902343 46.800781zm0 0" /></svg>
                                    </div>
                                    <div className="info">
                                    <h3>
                                        Chất lượng cao
                                    </h3>
                                    </div>
                                </div>
                                </div>
                                <div className="product-mini">
                                <h2 className="section_title">
                                    <a href="san-pham-noi-bat" title="Sản phẩm tiêu biểu">
                                    Sản phẩm tiêu biểu
                                    </a>
                                </h2>
                                <div className="section_content">
                                    {
                                        product_hot.map((value) => {
                                            return(
                                                <div className="item" key={value._id}>
                                                    <div className="col-item">
                                                        <div className="product-thumb">
                                                            <Link href={`/detail/${value.slug}`}>
                                                                <a title={value.name} className="thumb">
                                                                    <Image layout='fill' src={getStrapiMedia(value.image[0])} className="lazyload loaded" alt={value.name} />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div className="product-info">
                                                        <h3 className="title"><Link href={`/detail/${value.slug}`}><a title={value.name}>{value.name}</a></Link></h3>
                                                        <div className="content">
                                                            <div className="item-price">    
                                                            <div className="price-box"> 
                                                                <span className="special-price">{value.price}₫</span>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                </div>
                                <div className="sbar-product-middle">
                                <div className="bg clearfix">
                                    <div className="blogs_product">
                                    <h2 className="section_title">
                                        <a href="tin-tuc" title="Tin tức nổi bật">
                                        Tin tức nổi bật
                                        </a>
                                    </h2>
                                    <div className="section_content">
                                        <div className="mini">
                                        <div className="item item-blog-index">
                                            <div className="blog-img">
                                            <a href="/dewalt-cong-bo-hai-san-pham-moi-bluetooth-radio-va-task-light" title="DEWALT công bố hai sản phẩm mới: Bluetooth® Radio và Task Light">
                                                <img className="lazyload loaded" src="//bizweb.dktcdn.net/thumb/large/100/408/894/articles/tin-tuc-6.jpg?v=1603964981993" data-src="//bizweb.dktcdn.net/thumb/large/100/408/894/articles/tin-tuc-6.jpg?v=1603964981993" alt="DEWALT công bố hai sản phẩm mới: Bluetooth® Radio và Task Light" data-was-processed="true" />
                                            </a>
                                            </div>
                                            <div className="blog-content">
                                            <h3><a href="/dewalt-cong-bo-hai-san-pham-moi-bluetooth-radio-va-task-light" title="DEWALT công bố hai sản phẩm mới: Bluetooth® Radio và Task Light">DEWALT công bố hai sản phẩm mới: Bluetooth® Radio và Task Light</a> </h3>
                                            </div>
                                        </div>
                                        <div className="item item-blog-index">
                                            <div className="blog-img">
                                            <a href="/dewalt-hoi-sinh-dong-luu-tru-di-dong-voi-toughsystem-2-0" title="DEWALT hồi sinh dòng lưu trữ di động với ToughSystem 2.0">
                                                <img className="lazyload loaded" src="//bizweb.dktcdn.net/thumb/large/100/408/894/articles/tin-tuc-5.jpg?v=1603964952870" data-src="//bizweb.dktcdn.net/thumb/large/100/408/894/articles/tin-tuc-5.jpg?v=1603964952870" alt="DEWALT hồi sinh dòng lưu trữ di động với ToughSystem 2.0" data-was-processed="true" />
                                            </a>
                                            </div>
                                            <div className="blog-content">
                                            <h3><a href="/dewalt-hoi-sinh-dong-luu-tru-di-dong-voi-toughsystem-2-0" title="DEWALT hồi sinh dòng lưu trữ di động với ToughSystem 2.0">DEWALT hồi sinh dòng lưu trữ di động với ToughSystem 2.0</a> </h3>
                                            </div>
                                        </div>
                                        <div className="item item-blog-index">
                                            <div className="blog-img">
                                            <a href="/dewalt-cong-bo-kim-bam-hang-rao-khong-day-20v-max" title="DEWALT công bố kim bấm hàng rào không dây 20V MAX *">
                                                <img className="lazyload loaded" src="//bizweb.dktcdn.net/thumb/large/100/408/894/articles/tin-tuc-4.jpg?v=1603964926610" data-src="//bizweb.dktcdn.net/thumb/large/100/408/894/articles/tin-tuc-4.jpg?v=1603964926610" alt="DEWALT công bố kim bấm hàng rào không dây 20V MAX *" data-was-processed="true" />
                                            </a>
                                            </div>
                                            <div className="blog-content">
                                            <h3><a href="/dewalt-cong-bo-kim-bam-hang-rao-khong-day-20v-max" title="DEWALT công bố kim bấm hàng rào không dây 20V MAX *">DEWALT công bố kim bấm hàng rào không dây 20V MAX *</a> </h3>
                                            </div>
                                        </div>
                                        <div className="item item-blog-index">
                                            <div className="blog-img">
                                            <a href="/dewalt-cong-bo-may-cha-nham-to-20v-max-xr-1-4" title="DEWALT công bố Máy chà nhám tờ 20V MAX * XR 1/4">
                                                <img className="lazyload loaded" src="//bizweb.dktcdn.net/thumb/large/100/408/894/articles/tin-tuc-3.jpg?v=1603964903370" data-src="//bizweb.dktcdn.net/thumb/large/100/408/894/articles/tin-tuc-3.jpg?v=1603964903370" alt="DEWALT công bố Máy chà nhám tờ 20V MAX * XR 1/4" data-was-processed="true" />
                                            </a>
                                            </div>
                                            <div className="blog-content">
                                            <h3><a href="/dewalt-cong-bo-may-cha-nham-to-20v-max-xr-1-4" title="DEWALT công bố Máy chà nhám tờ 20V MAX * XR 1/4">DEWALT công bố Máy chà nhám tờ 20V MAX * XR 1/4</a> </h3>
                                            </div>
                                        </div>
                                        <div className="item item-blog-index">
                                            <div className="blog-img">
                                            <a href="/dewalt-ra-mat-hai-giai-phap-sac-moi" title="DEWALT ra mắt hai giải pháp sạc mới">
                                                <img className="lazyload loaded" src="//bizweb.dktcdn.net/thumb/large/100/408/894/articles/tin-tuc-2.jpg?v=1603964877570" data-src="//bizweb.dktcdn.net/thumb/large/100/408/894/articles/tin-tuc-2.jpg?v=1603964877570" alt="DEWALT ra mắt hai giải pháp sạc mới" data-was-processed="true" />
                                            </a>
                                            </div>
                                            <div className="blog-content">
                                            <h3><a href="/dewalt-ra-mat-hai-giai-phap-sac-moi" title="DEWALT ra mắt hai giải pháp sạc mới">DEWALT ra mắt hai giải pháp sạc mới</a> </h3>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>		
                        </div>
                        </div>
                    </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export async function getStaticPaths() {
    const products = await fetchAPI("/products");
    return {
      paths: products.map((product) => ({
        params: {
          slug: product.slug,
        },
      })),
      fallback: false,
    };
}
  
export async function getStaticProps({ params }) {
    const product = await fetchAPI(`/products?slug=${params.slug}`);
    const product_hot = await fetchAPI(`/brands?slug=san-pham-noi-bat`);
    return {
        props: { product: product[0], product_hot: product_hot[0].products  },
        revalidate: 1,
    };
}

export default Detail;
