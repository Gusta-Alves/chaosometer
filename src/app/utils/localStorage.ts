import { Plugins } from '@capacitor/core';
import { ITabela } from '../home/interfaces/ITabela';

const { Storage } = Plugins;


export class LocalStorageUtils {
    
    public async salvarIncidentes(incidente: ITabela[]) {
        await Storage.set({
            key: '@incidentes/tabela',
            value: JSON.stringify(incidente)
          });
    }

    public async obterIncidentes(): Promise<ITabela[]> {
        const objeto = await Storage.get({ key: '@incidentes/tabela' });
        const incidentes: ITabela[] = JSON.parse(objeto.value);
        return incidentes;
    }

    public async removerIncidente(incidente: ITabela, index: number) {
        const objeto = await Storage.get({ key: '@incidentes/tabela' });
        const incidentes: ITabela[] = JSON.parse(objeto.value);
        incidentes.splice(index, 1);
        await Storage.set({
            key: '@incidentes/tabela',
            value: JSON.stringify(incidentes)
        });
    }

    public async criarIncidente(incidente: ITabela) {
        const objeto = await Storage.get({ key: '@incidentes/tabela' });   
        const incidentes: ITabela[] = JSON.parse(objeto.value);     
        if(incidentes.length === 0){
            incidente.id = 1;
            const incidentes: ITabela[] = [incidente];
            await Storage.set({
                key: '@incidentes/tabela',
                value: JSON.stringify(incidentes)
              });
              return;
        }        
       
            const novo_id: number = incidentes[incidentes.length - 1].id + 1;
            incidente.id = novo_id;
            incidentes.push(incidente);
            
        await Storage.set({
            key: '@incidentes/tabela',
            value: JSON.stringify(incidentes)
        });
    }

    async atualizarIncidente(incidente: ITabela, index: number){
        const objeto = await Storage.get({ key: '@incidentes/tabela' });   
        const incidentes: ITabela[] = JSON.parse(objeto.value);
        incidentes[index] = incidente;
        await Storage.set({
            key: '@incidentes/tabela',
            value: JSON.stringify(incidentes)
        });
    }

    public async salvarIncidenteEditavel(incidente: ITabela){
        await Storage.set({
            key: '@incidentes/itemEditavel',
            value: JSON.stringify(incidente)
          });
    }

    public async obterIncidenteEditavel(): Promise<ITabela> {
        const objeto = await Storage.get({ key: '@incidentes/itemEditavel' });
        const incidentes: ITabela = JSON.parse(objeto.value);
        return incidentes;
    }

    public async limparEditavel(){
        Storage.remove({ key: '@incidentes/itemEditavel' });
    }
}