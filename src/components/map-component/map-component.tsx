import {MapContainer, Marker, TileLayer, useMap} from 'react-leaflet';
import { useAppSelector } from '../../hooks/use-store';
import { BookingQuest } from '../../store/type-store';


type MapComponentProps = {
  offers: BookingQuest[];
}

function MapComponent ({offers}: MapComponentProps) {
  const stateQuests = useAppSelector((state) => state.bookingQuest.quest);
  //const firstCord = stateQuests[0];

console.log(stateQuests);
  return (
    <MapContainer center={offers[0]?.location.coords} zoom={13} scrollWheelZoom={false} id="map" style={{'height' : '530px' , 'width' : '890px'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />

      {offers?.map((quest) => <Marker key={quest.id} position={quest.location.coords}/>)}
    </MapContainer>
  );
}

export {MapComponent};
