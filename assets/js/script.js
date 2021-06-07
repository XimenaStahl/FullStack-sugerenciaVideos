// Función IIFE
let llamada = (() => {
    // Funcion privada

    // Crear elemento iframe en el DOM
    let agregarVideo = (url, id) => {
        let ifrm = document.createElement('iframe');
        console.log(ifrm)
        elem = document.getElementById(id);
        console.log(elem)
        elem.appendChild(ifrm);
        ifrm.setAttribute('src', url);
        ifrm.setAttribute('width', 300);
        ifrm.setAttribute('height', 380);
    }
    return {
        mostrar: (url, id) => agregarVideo(url, id)
    }
})();

// Clase Padre
class Multimedia {
    constructor(url) {
        let _url = url;
        this.getUrl = () => _url;
        this.setUrl = (url) => _url = url;
    }

    get url() {
        return this.getUrl();
    }

    set url(url) {
        this.setUrl(url);
    }

    setInicio() {
        return (`Este método es para realizar un cambio en la URL del video`)
    }
}

// Clase Hija
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        let _id = id;
        this.getId = () => _id;
        this.setId = (id) => _id = id;
    }

    get id() {
        return this.getId();
    }

    set id(id) {
        this.setId(id);
    }

    playMultimedia() {
        // Revisar si hay otro elemento agrergado previamente y si es así eleiminarlo del DOM
        document.querySelectorAll('iframe').forEach(
            function(elem) {
                elem.parentNode.removeChild(elem);
            });

        llamada.mostrar(this.getUrl(), this.getId());
    }

    setInicio(tiempo) {
        document.getElementById(this.getId()).setAttribute('src', `${this.getUrl()}?t=${tiempo}`);
    }
}

// Presiona Música
let btnMusica = document.getElementById('btnMusica');
btnMusica.addEventListener('click', () => {
    urlMusica = 'https://open.spotify.com/embed/playlist/37i9dQZF1DX5dbJWdvTvOk';
    const musical = new Reproductor(urlMusica, 'musica')
    musical.playMultimedia();
    // musical.setInicio(200);
});

// Presiona peliculas
let btnPelicula = document.getElementById('btnPelicula');
btnPelicula.addEventListener('click', () => {
    urlPelicula = 'https://www.youtube.com/embed/mfmrPu43DF8';
    const pelicula = new Reproductor(urlPelicula, 'peliculas');
    pelicula.playMultimedia();
    pelicula.setInicio(14);
});

// Presiona series
let btnSerie = document.getElementById('btnSerie');
btnSerie.addEventListener('click', () => {
    urlSerie = 'https://www.youtube.com/embed/39zdSn3wio4';
    const serie = new Reproductor(urlSerie, 'series')
    serie.playMultimedia();
    // serie.setInicio(120);
});