export class DropdownFilter {
    value: number;
    label: string;

    constructor() {
        this.value = 0;
        this.label = '';
    }


    ///Years
    public static getYearsValues(defaultLabel: string): DropdownFilter[] {

        var years = new Array<DropdownFilter>();

        years.push({ value: 0, label: defaultLabel });

        for (var actYear = 0; actYear <= 100; actYear += 10) {
            years.push(DropdownFilter.toYears(actYear));
        }

        var nextValue = years[years.length - 1].value + 100;
        for (var actYear = nextValue; actYear <= 1000; actYear += 100) {
            years.push(DropdownFilter.toYears(actYear));
        }

        years.push({ value: Infinity, label: "Sin límite" });


        return years;
    }

    private static toYears(value: number): DropdownFilter {
        return { value: value, label: value.toLocaleString() }
    }


    ///Sizes
    public static getSizesValues(defaultLabel: string): DropdownFilter[] {

        var sizes = new Array<DropdownFilter>();

        sizes.push({ value: 0, label: defaultLabel });

        for (var actSize = 30; actSize <= 200; actSize += 20) {
            sizes.push(DropdownFilter.toSize(actSize));
        }

        var nextValue = sizes[sizes.length - 1].value + 50;
        for (var actSize = nextValue; actSize <= 900; actSize += 50) {
            sizes.push(DropdownFilter.toSize(actSize));
        }

        sizes.push({ value: Infinity, label: "Sin límite" });


        return sizes;
    }

    private static toSize(value: number): DropdownFilter {
        return { value: value, label: `${value} m2` };
    }


    ///Rooms
    public static getRoomsValues(): DropdownFilter[] {

        var rooms = new Array<DropdownFilter>();

        rooms.push({ value: 0, label: "Todos" });

        for (var actSize = 1; actSize <= 5; actSize++) {
            rooms.push(DropdownFilter.toRoom(actSize));
        }


        return rooms;
    }

    private static toRoom(value: number): DropdownFilter {
        return { value: value, label: `${value}+` };
    }
}
