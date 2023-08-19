export interface ContactType {
  id: string;
  firstName: string;
  lastName: string;
  status: 'active' | 'inactive';
}

export interface MapType {
  country: string;
  totalActive: number;
  totalRecovered: number;
  totalDeaths: number;
  geoCode: [number, number];
}
