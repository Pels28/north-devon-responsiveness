import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { toast } from "react-toastify";
import Input from "@/components/forms/Input";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { setKey, fromLatLng } from "react-geocode";
import { GOOGLE_MAPS_API_KEY } from "@/resources/config";

const DEFAULT_LATITUDE = 6.6812;
const DEFAULT_LONGITUDE = -1.6267;

setKey(GOOGLE_MAPS_API_KEY);

export interface IMapInfo {
  lat: number;
  lng: number;
  locationAddress: string;
}

interface IMapSearchProps {
  setMapInfo: React.Dispatch<React.SetStateAction<IMapInfo>>;
  onChange?: (input: Partial<IMapInfo>) => void;
  value?: IMapInfo;
}

function KumasiMapSearch() {
  const [markerPosition, setMarkerPosition] = useState<
    { lat: number; lng: number } | undefined
  >(undefined);
  const [placeName, setPlaceName] = useState("");
  const [mapInfo, setMapInfo] = useState<{
    lat: number;
    lng: number;
    locationAddress: string;
  }>({} as { lat: number; lng: number; locationAddress: string });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });
  // const {
  //   suggestions: { status, data },
  //   setValue,
  //   clearSuggestions,
  // } = usePlacesAutocomplete({
  //   requestOptions: {
  //     location: new window.google.maps.LatLng(
  //       DEFAULT_LATITUDE,
  //       DEFAULT_LONGITUDE
  //     ),
  //     radius: 100 * 1000,
  //   },
  // });

  useEffect(() => {
    setMarkerPosition({ lat: 6.6812, lng: -1.6267});
  }, []);

  const onMapClick = React.useCallback(
    (e: { latLng: { lat: () => any; lng: () => any } }) => {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      setMarkerPosition({ lat: lat, lng: lng });

      if (setMapInfo) {
        setMapInfo({ lat: lat, lng: lng, locationAddress: "" });
      }

      fromLatLng(lat, lng)
        .then((resp: any) => {
          setPlaceName(resp.results[0].formatted_address);
          setMapInfo((prev) => ({
            ...prev,
            locationAddress: resp.results[0].formatted_address,
          }));
        })
        .catch((error: any) => {
          toast.error(error);
        });
    },
    []
  );

  return (
    <>
      <div className="border-2 w-1/2 h-[550px]  rounded-xl  flex  justify-center items-center">
        {isLoaded ? (
          <GoogleMap
            id="map"
            mapContainerStyle={{
              width: "100%",
              height: "100%",
            }}
            center={{
              lat: markerPosition ? markerPosition.lat : DEFAULT_LATITUDE,
              lng: markerPosition ? markerPosition.lng : DEFAULT_LONGITUDE,
            }}
            options={{
              disableDefaultUI: true,
              zoomControl: true,
            }}
            zoom={17}
            onClick={() => {}}
          >
            {markerPosition ? (
              <Marker
                key={`${markerPosition.lat}-${markerPosition.lng}`}
                position={{ lat: markerPosition.lat, lng: markerPosition.lng }}
              >
                {placeName?.length ? (
                  <InfoWindow
                    position={{
                      lat: markerPosition?.lat,
                      lng: markerPosition?.lng,
                    }}
                  >
                    <div>{placeName}</div>
                  </InfoWindow>
                ) : (
                  <></>
                )}
              </Marker>
            ) : (
              <></>
            )}
          </GoogleMap>
        ) : (
          <h2 className="text-gray-400">Not Available</h2>
        )}
      </div>
    </>
  );
}

export default KumasiMapSearch;
