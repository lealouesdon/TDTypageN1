export class TableauExistentiel<M>{
    constructor(private tab:Array<M>){}

    elimination<R>(k: <T extends M>(t: Array<T>) =>R):R{
        return k(this.tab);
    }

    getItem(i:number):M{
        if(i<=this.tab.length){
            return this.tab[i];
        } else {
            throw new Error("L'élément n'existe pas");
        }
    }
}



function display(exist:TableauExistentiel<any>):string{
    let result:string = "";
    let i:number = 0;
    if(exist.getItem(i)){
        while(exist.getItem(i)!=null){
            result = result+ " ; " + exist.getItem(i);
            i++;
        }
    } else {
        console.log("Le tableau fourni en paramètre est vide");
    }
    return result;
}

let tableau1 = new Array<string>();
tableau1.push("ceci", "est", "un", "test");
let tableauExistentiel = new TableauExistentiel(tableau1);
console.log(display(tableauExistentiel));

let tableau2 = new Array<number>();
tableau2.push(2,5,6,7,8);
let tableauExist2 = new TableauExistentiel(tableau2);
console.log(display(tableauExist2));