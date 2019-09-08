import { IPrintTask } from '../interface/IPrintTask'
export class NoBookPrint implements IPrintTask {
    printType: string = "No";

    print(): string {
        return "No book Printed";
    }

}