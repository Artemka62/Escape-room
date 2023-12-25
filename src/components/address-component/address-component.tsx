type AddressProps = {
  address: string;
}

function AddressComponent ({address}: AddressProps) {
  return (
    <p className="booking-map__address">
      {`Вы выбрали: ${address}`}
    </p>
  );
}

export {AddressComponent};
