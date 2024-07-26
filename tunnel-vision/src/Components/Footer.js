import './_styles/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div id='footer'>
            <p data-testid='footer-test-id'>
                This website is a part of the 
                <a href='#portfolio.not.nexus/software/projects' target="_blank"> NOT Software Portfolio</a>
                <br />
                &copy; {currentYear}.  All Rights Reserved
            </p>
        </div>
    )
}

export default Footer;
