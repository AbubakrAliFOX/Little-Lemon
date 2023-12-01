


export default function BookingForm ({formData, setFormData, availableTimes}) {
    const handleChange = (e) => {
        setFormData(previousData => {
            return {...previousData, [e.target.name]: e.target.value}
        })
    }
    console.log(formData);

    return <form >
    <label htmlFor="res-date">Choose date</label>
    <input name="date" onChange={handleChange} type="date" id="res-date" value={formData.date} />
    <label htmlFor="res-time">Choose time</label>
    <select name="time" onChange={handleChange} value={formData.time} id="res-time">
       {availableTimes.map(el => <option>{el}</option>)}
    </select>
    <label htmlFor="guests">Number of guests</label>
    <input name="guests" onChange={handleChange} value={formData.guests} type="number" placeholder="1" min="1" max="10" id="guests" />
    <label htmlFor="occasion">Occasion</label>
    <select name="occasion" onChange={handleChange} value={formData.occasion} id="occasion">
       <option>Birthday</option>
       <option>Anniversary</option>
       <option>Engagement</option>
    </select>
    <input type="submit" value="Make Your reservation"></input>
 </form>
}