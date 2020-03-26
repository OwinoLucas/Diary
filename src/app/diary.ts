export class Diary {
    showEntry: boolean;
    constructor(public id: number, public title: string, public entry: string, public entryDate: Date) {
        this.showEntry = false;
    }

}
