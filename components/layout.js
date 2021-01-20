//Recoil
import { useRecoilState } from 'recoil'
import { statusMenubar } from '../recoil/atom'
//layout
import Footer from '../common/layout/Footer'

const Layout = ({ children, footer }) => {
    const [status, setStatus] = useRecoilState(statusMenubar);

    return(
        <div id="container">
            <div className={`overlay-menu ${!status ? 'd-none' : 'd-block'}`} onClick={() => setStatus(!status)} />
            {children}
            {
                footer !== false
                &&
                <Footer />
            }
        </div>
    );
}

export default Layout;