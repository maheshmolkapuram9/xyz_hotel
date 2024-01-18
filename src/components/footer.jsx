const Footer = () => {
    return (
        <div className="footer">
            <div className="adress">
                <span>© 2024 XYZ, </span>
                <span className="footerAdress"> ** Holland Park Avenue , </span>
                <span className="footerAdress"> London, Greater London, </span>
                <span className="footerAdress"> W11 *RW, United Kingdom </span>
            </div>
            <div>
                <a className="footerLink footerAdress" href="tel:+442077277725">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#65bf78" viewBox="0 0 256 256"><path d="M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z"></path></svg>
                +44 7442797127 
                </a>
                <a className="footerLink footerAdress" href="mailto:hotelravnagorauk@gmail.com">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#65bf78" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path></svg>
                aptitudeforbeginners@gmail.com
                </a>
            </div>
            <div>
                <a className="footerLink" href="https://www.londonravnagorahotel.co.uk/en-GB/privacy_policy" target="-blank">Privacy and cookie policy</a>
            </div>
        </div>
    )
};

export default Footer;