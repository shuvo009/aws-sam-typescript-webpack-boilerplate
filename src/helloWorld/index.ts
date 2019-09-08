// content of src/ingest/index.ts

import { Context, SNSEvent } from 'aws-lambda';
import { Result } from './models/Result'
import { Printer } from "./implections/Printer"




/**
 * Lambda Function handler that takes one SNS message at a time and add loyalty points to a customer
 * While SNS does send records in an Array it only has one event
 * That means we're safe to only select the first one (event.records[0])
 *
 * @param {any} event
 * @param {Context} context
 * @returns {Promise<Result>}
 */
export async function handler(event: any, context: Context): Promise<Result> {

  let message: string = "debugging...watch mode 3"
  console.log(message)

  let printer = new Printer().getPrinter(event.type);
  let text = printer.print();

  return {
    message: text,
  }
}