import {MapContainer, Marker, TileLayer} from 'react-leaflet';
import {useAppDispatch, useAppSelector} from '../../hooks/use-store';
import {BookingQuest} from '../../store/type-store';
import {LoadingComponent} from '../loading-component/loading-component';
import {AppRoute, DEFAULT_NULL, Map} from '../../const';
import {useEffect, useState} from 'react';
import * as L from 'leaflet';
import {bookingQuestSlice} from '../../store/slices/bookink-quest-slice';

type MapComponentProps = {
  points: BookingQuest[];
};

function MapComponent({points}: MapComponentProps) {
  const isLoading = useAppSelector((state) => state.bookingQuest.isLoading);
  const [selectedMarker, setSelectedMarker] = useState<string>(points[DEFAULT_NULL]?.id);
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.page.pageForLink);

  const activeIcon = new L.Icon({
    iconUrl: Map.IconUrlActive,
    iconSize: [Map.IconSizeWidth, Map.IconSizeHeight],
    iconAnchor: [Map.IconAnchorWidth, Map.IconSizeHeight],
  });

  const defaultIcon = new L.Icon({
    iconUrl: Map.IconUrlDefault,
    iconSize: [Map.IconSizeWidth, Map.IconSizeHeight],
    iconAnchor: [Map.IconAnchorWidth, Map.IconSizeHeight],
  });

  useEffect(()=>{
    setSelectedMarker(points[DEFAULT_NULL]?.id);
  },[isLoading]);

  function handleMarkerClick(id: string) {
    setSelectedMarker(id);
    dispatch(bookingQuestSlice.actions.idBookingQuest(id));
  }

  if (isLoading) {
    return <LoadingComponent/>;
  }

  return (
    <MapContainer
      center={points[DEFAULT_NULL]?.location.coords}
      zoom={Map.Zoom}
      scrollWheelZoom={false}
      id="map"
      style={{height: '100%', width: '100%'}}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      {points?.map((quest) => (
        <Marker
          key={quest.id}
          position={quest.location.coords}
          eventHandlers={{click: () => handleMarkerClick(quest.id) }}
          icon={selectedMarker === quest.id && page !== AppRoute.Contacts ? activeIcon : defaultIcon}
        />
      ))}
    </MapContainer>
  );
}

export { MapComponent };
