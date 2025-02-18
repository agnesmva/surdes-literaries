import './Footer.css'

function Footer (){
    const currentYear = new Date().getFullYear();
    return(
        
        <footer>
            <p>&copy; {currentYear} Surdes Literaries. Todos os direitos reservados.</p>
        </footer>
    );
};

export default Footer;