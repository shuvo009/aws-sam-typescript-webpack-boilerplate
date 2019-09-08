import { IPrintTask } from '../interface/IPrintTask'
export class BanglaBookPrint implements IPrintTask {
    printType: string = "Bangla";

    print(): string {
        return "Bangla book Printed";
    }

}