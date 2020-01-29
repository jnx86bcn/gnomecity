import { Gnome } from "./Gnome";

export class DropdownFilter {
    value: number;
    label: string;

    constructor() {
        this.value = 0;
        this.label = '';
    }

    public static getYearsValues(defaultLabel: string, minValue: number, maxValue: number): DropdownFilter[] {

        var years = new Array<DropdownFilter>();

        years.push({ value: 0, label: defaultLabel });

        for (var i = minValue; i <= Math.round(maxValue/2); i += 5) { //jump from 5 to 5
            years.push(DropdownFilter.toYears(i));
        }

        var nextValue = years[years.length - 1].value + 20;
        for (var i = nextValue; i <= maxValue; i += 20) { //jump from 20 to 20
            years.push(DropdownFilter.toYears(i));
        }

        return years;
    }

    private static toYears(value: number): DropdownFilter {
        return { value: value, label: `${value} años` }
    }

    public static getFriendsNumber(value: number): DropdownFilter[] {

        var friends = new Array<DropdownFilter>();

        friends.push({ value: 0, label: 'Sin restricción' });

        for (var i = 0; i < value; i ++) {
            friends.push(DropdownFilter.toFriends(i,'o más'));
        }

        friends.push(DropdownFilter.toFriends(value,''));

        return friends;
    }

    private static toFriends(value: number,text: string): DropdownFilter {
        return { value: value, label: `${value} ${text}` };
    }

    public static getJobsNumber(value: number): DropdownFilter[] {

        var jobs = new Array<DropdownFilter>();

        jobs.push({ value: 0, label: "Sin restricción" });

        for (var i = 1; i < value; i++) {
            jobs.push(DropdownFilter.toJobs(i,'o más'));
        }

        jobs.push(DropdownFilter.toJobs(i,''));

        return jobs;
    }

    private static toJobs(value: number,text: string): DropdownFilter {
        return { value: value, label: `${value} ${text}` };
    }
}
