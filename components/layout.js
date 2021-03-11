//Recoil
import { useRecoilState } from 'recoil'
import { StatusMenubar } from '../recoil/atom'
//layout
import Footer from '../common/layout/Footer'

const Layout = ({ children }) => {
    const [status, setStatus] = useRecoilState(StatusMenubar);

    return(
        <div id="container">
            <div className={`overlay-menu ${!status ? 'd-none' : 'd-block'}`} onClick={() => setStatus(!status)} />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;