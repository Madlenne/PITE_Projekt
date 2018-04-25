export class LoggedUser {

    constructor(
        public id: string,
        public token: string,
        public username: string,
        public mail: string,
        public imageUrl: string,
        public roles: Array<string> = [],
        public is_guide: Boolean = false
    ) {}

}
