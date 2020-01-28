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
}
