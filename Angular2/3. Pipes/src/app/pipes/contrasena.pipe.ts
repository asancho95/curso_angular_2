import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, cifrar:boolean = true): string {
    if(value.length>0){
      if(cifrar){
        let numChar:number = value.length;
        let aux = "";
        for(let i:number = 0;i<numChar;i++){
          aux += '*';
        }
        value = aux;
      }
    }
    return value;
  }

}