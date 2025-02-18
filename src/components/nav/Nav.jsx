import './Nav.css'

function Nav() {

    return(
        <nav class="menu">
            <img class="logo "src="" alt="" />
            <ul>
                <li><a href="/home">Início</a></li>
                <li><a href="/parcerias">Parcerias</a></li>
                <li><a href="/eventos">Eventos</a></li>
                <li><a href="/clube">Clube de Leitura</a></li>
                <li><a href="/sinalario">Sinalário Literário</a></li>
            </ul>
        </nav>
    );
}
export default Nav;