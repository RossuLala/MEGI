export class IgenyModel {
    id: number;
    nev: string;
    leir: string;
    kep: string;
    hetNap: string;
    kezdes: number;
    vege: number;
    ar: number; 
    itn: string;

    constructor(parameter?: IgenyModel){
        if (parameter) {
            Object.assign(this, parameter);
        }
    }

    proba(){
        console.log('dudu');
      }
}
// new IgenyModel() segítségével lehet meghívni

// let kocsi = new Igenymodel()
// kocsi.proba();
// ---kiírja--> dudu
