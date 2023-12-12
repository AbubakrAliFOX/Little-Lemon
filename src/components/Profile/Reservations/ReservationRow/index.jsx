function ReservationRow({data, idx}) {
  return (
    <tr>
      <td className="numbers-td">{idx + 1}</td>
      <td>{data.Date}</td>
      <td>{data.Time}</td>
      <td>{data.Occasion}</td>
      <td >{data.Guests} </td>
    </tr>
  );
}

export default ReservationRow;
