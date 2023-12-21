import {MapContainer, Marker, TileLayer} from 'react-leaflet';
import {useAppDispatch, useAppSelector} from '../../hooks/use-store';
import {BookingQuest} from '../../store/type-store';
import {LoadingComponent} from '../loading-component/loading-component';
import {DEFAULT_NULL} from '../../const';
import {useEffect, useState} from 'react';
import * as L from 'leaflet';
import { bookingQuestSlice } from '../../store/slices/bookink-quest-slice';

type MapComponentProps = {
  offers: BookingQuest[];
};

function MapComponent({offers}: MapComponentProps) {
  const isLoading = useAppSelector((state) => state.bookingQuest.isLoading);
  const [selectedMarker, setSelectedMarker] = useState<string>(offers[DEFAULT_NULL]?.id);
  const dispatch = useAppDispatch();

  const activeIcon = new L.Icon({
    iconUrl: 'img/svg/pin-active.svg',
    iconSize: [23, 42],
    iconAnchor: [11.5, 42],
  });

  const defaultIcon = new L.Icon({
    iconUrl: 'img/svg/pin-default.svg',
    iconSize: [23, 42],
    iconAnchor: [11.5, 42],
  });

  useEffect(()=>{
    setSelectedMarker(offers[DEFAULT_NULL]?.id);
  },[isLoading]);

  function handleMarkerClick(id: string) {
    setSelectedMarker(id);
    dispatch(bookingQuestSlice.actions.idBookingQuest(id));
  }

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <MapContainer
      center={offers[DEFAULT_NULL]?.location.coords}
      zoom={10}
      scrollWheelZoom={false}
      id="map"
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      {offers?.map((quest) => (
        <Marker
          key={quest.id}
          position={quest.location.coords}
          eventHandlers={{ click: () => handleMarkerClick(quest.id) }}
          icon={selectedMarker === quest.id ? activeIcon : defaultIcon}
        />
      ))}
    </MapContainer>
  );
}

export { MapComponent };
