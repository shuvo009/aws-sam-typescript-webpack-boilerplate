import { IPrintTask } from '../interface/IPrintTask'
export class EnglishBookPrint implements IPrintTask {
    printType: string = "English";

    print(): string {
        return "English book Printed";
    }

}