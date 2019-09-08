import { IPrintTask } from "../interface/IPrintTask";
import { BanglaBookPrint } from "./BanglaBookPrint";
import { EnglishBookPrint } from "./EnglishBookPrint";
import { SpanishBookPrint } from "./SpanishBookPrint";
import { NoBookPrint } from "./NotBookPrinter";

export class Printer {
    printers: IPrintTask[] = []
    constructor() {
        this.printers.push(new BanglaBookPrint());
        this.printers.push(new EnglishBookPrint());
        this.printers.push(new SpanishBookPrint());
    }
    getPrinter(printType: string): IPrintTask {
        let printTask : IPrintTask = new NoBookPrint();
        this.printers.forEach(element => {
            if (element.printType === printType) {
                printTask= element;
                return;
            }
        });
        return printTask;
    }

}