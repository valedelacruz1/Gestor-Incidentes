export interface RespTipoIncidentes {
    msg:              string;
    totalMYSQL:     number;
    tipoIncidentesMy: TipoIncidentesMy[];
    totalMongoDB:     number;
    tipoIncidentesMo: TipoIncidentesMo[];
}

export interface TipoIncidentesMo {
    tinc_nombre:      string;
    tinc_descripcion: string;
    tinc_estado:      boolean;
    idMYSQL:          number;
    createdAt:        Date;
    updatedAt:        Date;
    id:               string;
}

export interface TipoIncidentesMy {
    id:               number;
    tinc_nombre:      string;
    tinc_descripcion: string;
    tinc_estado:      boolean;
    createdAt:        Date;
    updatedAt:        Date;
}

export interface TipoIncidente{
    id:               number;
    tinc_nombre:      string;
    tinc_descripcion: string;
    tinc_estado:      boolean;
    createdAt:        Date;
    updatedAt:        Date;
}

