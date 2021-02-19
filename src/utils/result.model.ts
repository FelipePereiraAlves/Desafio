export class Result {
    constructor(
        public message: string,
        public success: boolean,
        public error: any,
        public data: any,
    ){}
}
