import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'revisionAdmin',
})
export class revisionAdminPipe implements PipeTransform {
  transform(incidente: any): string {
    const { inc_usuario, inc_usuarioRevision } = incidente;

    if (inc_usuario.correo === inc_usuarioRevision.correo) {
      return 'A la espera de Revision por parte de un Administrador';
    } else {
      return inc_usuarioRevision.correo;
    }
  }
}
