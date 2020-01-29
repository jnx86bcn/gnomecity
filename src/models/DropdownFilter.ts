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

        for (var i = 0; i <= 100; i += 10) {
            years.push(DropdownFilter.toYears(i));
        }

        var nextValue = years[years.length - 1].value + 100;
        for (var i = nextValue; i <= 1000; i += 100) {
            years.push(DropdownFilter.toYears(i));
        }

        years.push({ value: Infinity, label: "Sin límite" });


        return years;
    }

    private static toYears(value: number): DropdownFilter {
        return { value: value, label: `${value} años` }
    }


    ///Sizes
    public static getFriendsNumber(): DropdownFilter[] {

        var friends = new Array<DropdownFilter>();

        friends.push({ value: 0, label: 'Sin restricción' });

        for (var i = 0; i <= 10; i ++) {
            friends.push(DropdownFilter.toFriends(i));
        }


        return friends;
    }

    private static toFriends(value: number): DropdownFilter {
        return { value: value, label: `${value} o más` };
    }


    ///Rooms
    public static getJobsNumber(): DropdownFilter[] {

        var jobs = new Array<DropdownFilter>();

        jobs.push({ value: 0, label: "Sin restricción" });

        for (var i = 1; i <= 5; i++) {
            jobs.push(DropdownFilter.toJobs(i));
        }


        return jobs;
    }

    private static toJobs(value: number): DropdownFilter {
        return { value: value, label: `${value}  o más` };
    }
}
