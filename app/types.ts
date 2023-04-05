export type FormulaOneDriver = {
  driverId: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
  url: string;
};

export type FormulaOneApiResponse = {
  MRData: {
    DriverTable: {
      Drivers: FormulaOneDriver[];
    };
  };
};
