import {Component, Pipe, PipeTransform} from '@angular/core';
import {WalletDto} from "../../dto/WalletDto";


@Pipe({
   name: 'search'
   })
export class SearchPipesComponent implements PipeTransform{
    transform(objects: any[], query:any): any[] {
         if(query == null  || query=="")
           return objects;

         return objects.filter(
           (objects)=>{
             let objString = JSON.stringify(objects).toLowerCase();
             console.log(objString);
             let queryRef = query.toLowerCase();
             console.log(queryRef);
             console.log(objString.indexOf(queryRef));
             return (JSON.stringify(objects).toLowerCase().indexOf(query.toLowerCase()) >= 0)?true:false
           }
         );
    }
 }
