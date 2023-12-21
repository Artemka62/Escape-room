import {MapContainer, Marker, TileLayer} from 'react-leaflet';
import {useAppSelector} from '../../hooks/use-store';
import {BookingQuest} from '../../store/type-store';
import {LoadingComponent} from '../loading-component/loading-component';
import {AppRoute, DEFAULT_NULL} from '../../const';
import {useNavigate} from 'react-router-dom';

type MapComponentProps = {
  offers: BookingQuest[];
}

function MapComponent ({offers}: MapComponentProps) {
  const isLoading = useAppSelector((state) => state.bookingQuest.isLoading);

  const navigate = useNavigate();


  function handleMarkerClick (id: string) {
    console.log(id);

    //navigate(`${AppRoute.Quest}/${id}${AppRoute.Booking}`);
  }

  if(isLoading){
    return <LoadingComponent/>;
  }

  return (
    <MapContainer center={offers[DEFAULT_NULL]?.location.coords} zoom={11} scrollWheelZoom={false} id="map" style={{'height' : '530px' , 'width' : '890px'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {offers?.map((quest) => <Marker key={quest.id} position={quest.location.coords} eventHandlers={{ click: () => handleMarkerClick(quest.id) }}/>)}
    </MapContainer>
  );
}

export {MapComponent};
