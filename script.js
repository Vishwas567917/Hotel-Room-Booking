const rooms = document.querySelectorAll('.room');
const bookingForm = document.getElementById('booking-form');
const bookingFormInner = document.getElementById('booking-form-inner');
const submitBtn = document.getElementById('submit-btn');
const bookingSuccess = document.getElementById('booking-success');

rooms.forEach((room) => {
	room.addEventListener('click', (e) => {
		const roomId = e.target.dataset.roomId;
		bookingForm.hidden = false;
		bookingFormInner.dataset.roomId = roomId;
	});
});

submitBtn.addEventListener('click', (e) => {
	e.preventDefault();
	const roomId = bookingFormInner.dataset.roomId;
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const startDate = document.getElementById('start-date').value;
	const endDate = document.getElementById('end-date').value;
	
	// Send booking data to server (not implemented)
	console.log(`Booking successful! Room ${roomId} booked for ${name} from ${startDate} to ${endDate}`);
	
	bookingForm.hidden = true;
	bookingSuccess.hidden = false;
});