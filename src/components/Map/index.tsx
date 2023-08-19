import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from '../../hooks/useMap';
import { MapType } from '../../types';
import { Icon } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import DataLoader from '../DataLoader';

const Map = () => {
  const { data, isLoading } = useMap();
  // console.log(data, 'data');

  const markers = data?.map((item: any) => {
    return {
      country: item?.country,
      totalActive: item?.active,
      totalRecovered: item?.recovered,
      totalDeaths: item?.deaths,
      geoCode: [item?.countryInfo?.lat, item?.countryInfo?.long],
    };
  });

  const customIcon = new Icon({
    iconUrl: require('../../assets/images/marker.png'),
    iconSize: [25, 25],
  });

  return (
    <div className="w-full h-full mt-16">
      {isLoading ? (
        <DataLoader />
      ) : (
        <MapContainer
          center={[48.8566, 2.3522]}
          zoom={4}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup>
            {markers?.map((marker: MapType) => (
              <Marker
                key={marker?.country}
                position={marker?.geoCode}
                icon={customIcon}
              >
                <Popup>
                  <h2 className="text-base font-bold text-center text-gray-700">
                    {marker?.country}
                  </h2>
                  <p className="text-sm font-semibold text-left text-gray-400">
                    Total Active Cases: {marker?.totalActive}
                  </p>
                  <p className="text-sm font-semibold text-left text-gray-400">
                    Total Recovered Cases: {marker?.totalRecovered}
                  </p>
                  <p className="text-sm font-semibold text-left text-gray-400">
                    Total Deaths: {marker?.totalDeaths}
                  </p>
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
