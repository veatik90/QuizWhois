import {FilmsDataArrayInterfaces} from "../data/filmsDataArrayInterfaces";

export function SortClass() {
    function preparedDataForSort(element: FilmsDataArrayInterfaces) {
        let elementPrepare = element.date.split(".").reverse();
        return new Date(Number(elementPrepare[0]), Number(elementPrepare[1]), Number(elementPrepare[2])).getTime();
    }

    return {
        byAsc(data: Array<FilmsDataArrayInterfaces>): Array<FilmsDataArrayInterfaces> {
            return data.sort((firstElement: FilmsDataArrayInterfaces, secondElement: FilmsDataArrayInterfaces): number => {
                return (preparedDataForSort(firstElement) - preparedDataForSort(secondElement));
            });
        },

        byDesc(data: Array<FilmsDataArrayInterfaces>): Array<FilmsDataArrayInterfaces> {
            return data.sort((firstElement: FilmsDataArrayInterfaces, secondElement: FilmsDataArrayInterfaces): number => {
                return (preparedDataForSort(secondElement) - preparedDataForSort(firstElement));
            });
        },
    }
}