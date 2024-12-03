//Se crea una interfaz
export interface Audiproducto{
    id?: string;
    nombreantiguo?: string;
    precioantiguo?: DoubleRange;
    cantidadantiguo?: number;
    caracteristicasant?: string;
    imagenantiguo?: string;
    nombrenuevo?: string;
    precionuevo?: DoubleRange;
    cantidadnuevo?: number;
    caracteristicasnue?: string;
    imagennuevo?: string;
    usuario?: string;
    fechamodificado?: Date;
    accion?: string;
    codigo?: number
}