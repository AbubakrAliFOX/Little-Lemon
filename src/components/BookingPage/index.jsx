import { useState } from "react"
import BookingForm from './BookingForm';

export default function BookingPage () {
    const [availableTimes, setAvailableTimes] = useState(['17:00', '11:00', '17:00', '17:00', '17:00', '17:00']);
    const [formData, setFormData] = useState({date:'', time: '', guests: '', occasion:''});

    return <>
    <h1>This is the Booking Page Bro</h1>
    <BookingForm availableTimes={availableTimes} formData={formData} setFormData={setFormData} />
    </>
}