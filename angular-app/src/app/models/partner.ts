export class Partner {
  constructor(
        public UniqueID: string,
        public partnerName: string,
        public country: string,
        public countryId: string,
        public address: string,
        public phoneno: string,
        public conPerson: string,
        public conPersonEmail: string,
        public conPersonPhone: string,
        public website: string,
        public createdBy: string,
        public createdDate: string,
        public isActive: number,
    ) {}
}

// export interface Employee {
//     Id: string;
//     FirstName : string;
//     LastName : string;
//     Department : string;
//     Salary : string;
//     Mobile : string;
//     Email : string;
// }
