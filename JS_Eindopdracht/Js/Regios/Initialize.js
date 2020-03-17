export class Regios {
    static getRegios()
    {
        let regios;
        if(localStorage.getItem("regios") === null){
            regios = [];
        }
        else{
            regios = JSON.parse(localStorage.getItem("regios"));
        }
        return regios;
    }

    static addRegios(regio)
    {
        const stroredregios = this.getRegios();

        stroredregios.push(regio);

        localStorage.setItem("regios", JSON.stringify(stroredregios));
    }

    static getRegio(name){
        let regio;
        if(localStorage.getItem("regios") === null){
            regio = [];
        }
        else{
            let regios = JSON.parse(localStorage.getItem('regios'));
            for (let index = 0; index < 3; index++)
            {
                if (regios[index].name.includes(name))
                {
                    regio = regios[index];
                }
            }
        }
        return regio;
    }

    static updateRegio(update) {
        const storedRegios = this.getRegios();

        for (let i in storedRegios)
        {
            if (storedRegios[i].name == update.name)
            {
                storedRegios[i] = update;
            }
        }
        localStorage.setItem("regios", JSON.stringify(storedRegios));
    }
}

 export class Warehouse{
    constructor(name, items, grid) {
        this.name = name;
        this.items = items;
        this.grid = grid;
    }
}
