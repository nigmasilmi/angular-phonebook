import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {

  transform(contactos: any[], searchText: string): any[] {
    if (!contactos) {
      return [];
    }
    if (!searchText) {
      return contactos;
    }
    searchText = searchText.toLocaleLowerCase();

    return contactos.filter(contacto => {
      // tslint:disable-next-line: max-line-length
      return contacto.nombre.toLocaleLowerCase().includes(searchText)
        || contacto.apellido.toLocaleLowerCase().includes(searchText)
        || contacto.direccion.comuna.nombre.toLocaleLowerCase().includes(searchText);
    });
  }
}
