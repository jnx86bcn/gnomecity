export class Gnome {
    id: number;
    name: string;
    thumbnail: string;
    age: number;
    weight: number;
    height: number;
    hair_color: string;
    professions: string[];
    friends: string[];

    constructor() {
        this.id = 0,
        this.name = '0',
        this.thumbnail = '',
        this.age = 0,
        this.weight = 0,
        this.height = 0,
        this.professions = [],
        this.friends = []
    }

    public static sortByName(gnomes: Gnome[]): Gnome[] {
        return gnomes.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        });
    }

    public static getYoungerGnome(gnomes: Gnome[]): Gnome {
        let auxGnomes:Gnome[] = gnomes;
        return auxGnomes.slice().sort(function (a, b) { return a.age - b.age; })[0];
    }

    public static getOlderGnome(gnomes: Gnome[]): Gnome {
        let auxGnomes:Gnome[] = gnomes;
        return auxGnomes.slice().sort(function (a, b) { return b.age - a.age; })[0];
    }

    public static getMostPopular(gnomes: Gnome[]): Gnome {
        let auxGnomes:Gnome[] = gnomes;
        return auxGnomes.slice().sort(function (a, b) { return b.friends.length - a.friends.length; })[0];
    }

    public static getMostHardworking(gnomes: Gnome[]): Gnome {
        let auxGnomes:Gnome[] = gnomes;
        return auxGnomes.slice().sort(function (a, b) { return b.professions.length - a.professions.length; })[0];
    }

}
