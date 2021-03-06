export interface InfoPagina {
    titulo?: string;
    email?: string;
    nombre_autor?: string;
    paginaGitHub?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    tumbler?: string;
    equipoDeTrabajo?: any[];
}




export interface Producto {
    categoria: string;
    cod: string;
    titulo: string;
    url: string;
}


export interface ProductoDescripcion {
    categoria: string;
    desc1: string;
    desc2: string;
    producto: string;
    resumen: string;
    subtitulo1: string;
    subtitulo2: string;
}
