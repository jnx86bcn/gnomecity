import jsonGnomes from '../resources/Gnomes.json';

import { Gnome } from '../models';
import { FiltersValues } from '../models/FiltersValues';

//DEV//
export function getAllItems_DEV(): Promise<Gnome[]> {

    const latency = Math.random() * (5000 - 2000) + 2000;//emulate random delay from server between 2 to 5 seconds

    return new Promise((resolve) => {
        setTimeout(() => {
            let data: Gnome[] = Gnome.sortByName(jsonGnomes);
            resolve(data);
        }, latency);
    });

}

export function getFilteredItems_DEV(filters: FiltersValues): Promise<Gnome[]> {

    const latency = Math.random() * (5000 - 2000) + 2000;//emulate random delay from server between 2 to 5 seconds

    return new Promise((resolve) => {
        setTimeout(() => {
            let data: Gnome[] = jsonGnomes;
            let filteredData: Gnome[] = data;

            filteredData = data.filter((item)=>{return item.age>=filters.edadMinSelected && item.age<=filters.edadMaxSelected});//filter by age
            filteredData = filteredData.filter((item)=>{return item.friends.length>=filters.minFriendsSelected});//filter by number of friends
            filteredData = filteredData.filter((item)=>{return item.professions.length>=filters.minJobsSelected});//filter by number of jobs

            resolve(Gnome.sortByName(filteredData));
        }, latency);
    });

}