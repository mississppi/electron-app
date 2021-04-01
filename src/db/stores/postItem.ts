import Datastore from "nedb";

export class PostItemStore {
    private DbStore: any;
    constructor() {
        const db: any = new Datastore({filename: "data.db"});
        db.loadDatabase((error: string) => {
            if(error !== null){
                console.error(error);
            }
            console.log("success");
        })
        this.DbStore = db;
    }

    readAll(){
        console.log(this.DbStore.find({}, function(err: string, docs: any) {
            docs.forEach(function (li: string) {
                const data: any = li;
                console.log(data.title);
            })
        }));
    }
}