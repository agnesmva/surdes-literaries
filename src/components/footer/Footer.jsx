import { FaYoutube, FaInstagram, FaThreads } from 'react-icons/fa6';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C9997]/76 text-white py-6 flex justify-center">
      <div className="text-center space-y-2">
        {/* Ícones de redes sociais */}
        <div className="flex justify-center gap-5 text-xl">
          <a
            href="https://www.threads.com/@surdosliterarios"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-[#003C43] transition-colors duration-300"
          >
            <FaThreads />
          </a>
          <a
            href="https://www.youtube.com/channel/UCLxR01iVkuNqBPO3PY6eqcg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="hover:text-[#003C43] focus:outline-none focus:ring-2 focus:ring-white rounded"
          >
            <FaYoutube/>
          </a>
          <a
            href="https://instagram.com"
            target="https://www.instagram.com/surdosliterarios/"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-[#003C43] focus:outline-none focus:ring-2 focus:ring-white rounded"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Links e direitos */}
        <div className="text-l space-y-1">
          <p>
            <a
              href="https://docs.google.com/forms/d/1OiBetnpjQvOr2AWB2hc7N4Ie2dOLKSpnyWUskbWXrF8/viewform?edit_requested=true"
              className=" hover:text-[#003C43] focus:outline-none focus:ring-2 focus:ring-white rounded"
              target='blank'
            >
              Fale Conosco
            </a>
          </p>
          <p>
            <a
              href="/politica-de-privacidade"
              className=" hover:text-[#003C43] focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              Política de Privacidade
            </a>
          </p>
          <p>&copy; {currentYear} Surdes Literaries. Todos os direitos reservados.</p>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
