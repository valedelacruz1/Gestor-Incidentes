export interface RespDependencias {
  msg:            string;
  totalMYSQL:     number;
  dependenciasMy: DependenciasMy[];
  totalMongoDB:   number;
  dependenciasMo: DependenciasMo[];
}

export interface DependenciasMo {
  dep_nombre:      string;
  dep_descripcion: string;
  dep_estado:      boolean;
  idMYSQL:         number;
  createdAt:       Date;
  updatedAt:       Date;
  id:              string;
}

export interface DependenciasMy {
  id:              number;
  dep_nombre:      string;
  dep_descripcion: string;
  dep_estado:      boolean;
  createdAt:       Date;
  updatedAt:       Date;
}

export interface Dependencia{
  id:number;
  dep_nombre:string;
  dep_descripcion:string;
  dep_estado:boolean;
  createdAt:Date;
  updatedAt:Date;
}
