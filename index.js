function ImprimirHeaderFooter(){
    let contenedor = document.getElementById("top");
    contenedor.innerHTML = ObtenerHeader();

    let contenedor2 = document.getElementById("bot");
    contenedor2.innerHTML = ObtenerFooter();

}

function ObtenerHeader(){
    return `<header class="barra-main">
    <ul class="barra-nav">
        <li class="barra-nav-elementos"><a href="/index.html"><img src="/img/logo-rush.png" alt="Logo" class="logo"></a></li>
        <li class="barra-nav-elementos"><a href="/contenido/deportes/concepto.html">Concepto</a></li>
        <li class="barra-nav-elementos"><a href="/categorias.html">Categorias</a></li>
        <li class="barra-nav-elementos bridge"><a href="/contenido/busqueda.html"><img src="/img/icons/search.png" alt="Icono-Buscar" class="nav-button"></a></li>
        <li class="barra-nav-elementos"><a href="/contenido/login.html"><img src="/img/icons/user.png" alt="Icono-Login" class="nav-button"></a></li>
    </ul>
    </header>`;
}

function ObtenerFooter(){
    return `<footer>
    <section class="logo-footer">
        <img src="/img/logo-rush.png" alt="">
    </section>
    <div class="v-line"></div>
    <section class="quick-links">
        <ul>
            <li><a href="/contenido/acerca-de.html">Acerca de</a></li>
            <li><a href="/contenido/contacto.html">Contactanos</a></li>
        </ul>
    </section>
    <div class="v-line"></div>
    <section class="sponsors">
        <ul>
            <li>Sponsored by...</li>
            <li><img src="" alt=""></li>
            <li><img src="" alt=""></li>
        </ul>   
    </section>
    </footer>`;
}