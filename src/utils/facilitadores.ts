import { Guid } from 'guid-typescript'

export class Facilitadores {
  public removeAlphanumericAndCorrectsAmount(data: number): number {
    const dataRefatorand = data.toFixed(2);
    return parseInt(dataRefatorand.replace(/[^\d]+/g,''));
  }

  public removeAlphanumericAndCorrectsAmountString(data: string): string {
    return data.replace(/[^\d]+/g,'');
  }

  public removeAlphanumericCreditCard(data: string): string {
    console.log(data);
    return data.replace(/[^\d]+/g,'');
  }

  public guid(): string {
    const guid = Guid.create();
    return guid['value'];
  }
}
