import "./Styles/DeliveryLocation.css";
export default function DeliveryLocation({
  locations,
  selectedLocation,
  onChange,
}) {
  function changeLocation(event) {
    onChange(event.target.value);
  }
  return (
    <div className="delivery">
      <label htmlFor="delivery-select" className="delivery__label">
        Deliver to — Tshwane Campus
      </label>
      <select
        id="delivery-select"
        className="delivery__select"
        value={selectedLocation}
        onChange={changeLocation}
      >
        <option value="" disabled>
          Choose a campus location…
        </option>
        {locations.map(function (loc) {
          return (
            <option key={loc.id} value={loc.id}>
              {loc.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
