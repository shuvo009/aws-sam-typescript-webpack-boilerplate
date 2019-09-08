import { IPrintTask } from '../interface/IPrintTask'
export class SpanishBookPrint implements IPrintTask {
    printType: string = "Spanish";

    print(): string {
        return "Spanish book Printed";
    }

}