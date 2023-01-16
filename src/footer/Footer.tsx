import '../.././src/css/cssFooter/Footer.scss'
import FooterCompany from './FooterCompany'
import FooterContact from './FooterContact'
import FooterF8 from './FooterF8'
import FooterProduct from './FooterProduct'
import FooterSupport from './FooterSupport'

const Footer = () => {
    return (
        <div className='d-flex footer'>
            <div className='w-25'>
                <FooterContact />
            </div>
            <div className='w-16'>
                <FooterF8 />
            </div>
            <div className='w-16'>
                <FooterProduct />
            </div>
            <div className='w-16'>
                <FooterSupport />
            </div>
            <div className='w-25'>
                <FooterCompany />
            </div>
        </div>
    )
}

export default Footer