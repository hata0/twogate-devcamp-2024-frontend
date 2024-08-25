type Args = {
  origin: {
    latitude: number;
    longitude: number;
  };
  destination: {
    latitude: number;
    longitude: number;
  };
};

export const createPlaceDirectionUrl = ({ destination, origin }: Args) => {
  const encodedOrigin = encodeURIComponent(`${origin.latitude},${origin.longitude}`);
  const encodedDestination = encodeURIComponent(`${destination.latitude},${destination.longitude}`);
  return `https://www.google.com/maps/dir/?api=1&origin=${encodedOrigin}&destination=${encodedDestination}`;
};
