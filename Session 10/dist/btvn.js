class Passenger {
    name;
    passportNumber;
    static nextId = 1;
    passengerId;
    constructor(name, passportNumber) {
        this.name = name;
        this.passportNumber = passportNumber;
        this.passengerId = Passenger.nextId++;
    }
    getDetails() {
        return `PassengerID: ${this.passengerId}, Name: ${this.name}, Passport: ${this.passportNumber}`;
    }
}
class Flight {
    flightNumber;
    origin;
    destination;
    departureTime;
    capacity;
    bookedSeats = 0;
    constructor(flightNumber, origin, destination, departureTime, capacity) {
        this.flightNumber = flightNumber;
        this.origin = origin;
        this.destination = destination;
        this.departureTime = departureTime;
        this.capacity = capacity;
    }
    /** Số ghế còn lại */
    seatsLeft() {
        return Math.max(0, this.capacity - this.bookedSeats);
    }
    /** Đặt ghế theo số lượng (có kiểm tra capacity) */
    bookSeats(qty) {
        if (qty <= 0)
            return false;
        if (this.bookedSeats + qty > this.capacity)
            return false;
        this.bookedSeats += qty;
        return true;
    }
    /** Trả ghế khi hủy booking */
    releaseSeats(qty) {
        this.bookedSeats = Math.max(0, this.bookedSeats - Math.max(0, qty));
    }
    isFull() {
        return this.bookedSeats >= this.capacity;
    }
}
class DomesticFlight extends Flight {
    calculateBaggageFee(weightKg) {
        return Math.max(0, weightKg) * 50_000;
    }
    getBaseFare() {
        return 1_000_000;
    }
}
class InternationalFlight extends Flight {
    /** Tỷ giá USD→VND (có thể chỉnh) */
    static EXRATE_USD_VND = 25_000;
    calculateBaggageFee(weightKg) {
        const usd = Math.max(0, weightKg) * 10; // 10 USD/kg
        return usd * InternationalFlight.EXRATE_USD_VND;
    }
    getBaseFare() {
        return 2_000_000;
    }
}
class Booking {
    passenger;
    flight;
    numberOfTickets;
    totalBaggageKg;
    static nextId = 1;
    bookingId;
    totalCost;
    constructor(passenger, flight, numberOfTickets, 
    /** Tổng kg hành lý của booking (cộng tất cả vé) */
    totalBaggageKg) {
        this.passenger = passenger;
        this.flight = flight;
        this.numberOfTickets = numberOfTickets;
        this.totalBaggageKg = totalBaggageKg;
        this.bookingId = Booking.nextId++;
        const baseFare = flight.getBaseFare();
        const baggageFee = flight.calculateBaggageFee(totalBaggageKg);
        this.totalCost = baseFare * numberOfTickets + baggageFee;
    }
    getBookingDetails() {
        return `BookingID: ${this.bookingId}, Passenger: ${this.passenger.name}, Flight: ${this.flight.flightNumber}, Tickets: ${this.numberOfTickets}, Baggage: ${this.totalBaggageKg}kg, TotalCost: ${this.totalCost.toLocaleString()} VND`;
    }
}
class GenericRepository {
    items = [];
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
    find(predicate) {
        return this.items.find(predicate);
    }
    findIndex(predicate) {
        return this.items.findIndex(predicate);
    }
    remove(predicate) {
        this.items = this.items.filter(item => !predicate(item));
    }
}
class AirlineManager {
    flightRepo = new GenericRepository();
    passengerRepo = new GenericRepository();
    bookingRepo = new GenericRepository();
    addFlight(flight) {
        // Đảm bảo flightNumber duy nhất
        const existed = this.flightRepo.find(f => f.flightNumber === flight.flightNumber);
        if (existed) {
            alert(`Số hiệu chuyến bay "${flight.flightNumber}" đã tồn tại!`);
            return;
        }
        this.flightRepo.add(flight);
    }
    addPassenger(name, passportNumber) {
        // Có thể thêm kiểm tra trùng passport nếu muốn
        const p = new Passenger(name, passportNumber);
        this.passengerRepo.add(p);
    }
    createBooking(passengerId, flightNumber, numberOfTickets, totalBaggageKg) {
        const passenger = this.passengerRepo.find(p => p.passengerId === passengerId);
        const flight = this.flightRepo.find(f => f.flightNumber === flightNumber);
        if (!passenger || !flight) {
            alert("Lỗi: Không tìm thấy hành khách hoặc chuyến bay!");
            return null;
        }
        if (numberOfTickets <= 0) {
            alert("Số lượng vé phải lớn hơn 0!");
            return null;
        }
        if (flight.seatsLeft() < numberOfTickets) {
            alert(`Chuyến bay không đủ chỗ! Còn lại: ${flight.seatsLeft()} ghế.`);
            return null;
        }
        const ok = flight.bookSeats(numberOfTickets);
        if (!ok) {
            alert("Đặt chỗ thất bại (có thể do vượt quá sức chứa).");
            return null;
        }
        const booking = new Booking(passenger, flight, numberOfTickets, totalBaggageKg);
        this.bookingRepo.add(booking);
        return booking;
    }
    cancelBooking(bookingId) {
        const booking = this.bookingRepo.find(b => b.bookingId === bookingId);
        if (booking) {
            // Trả ghế
            booking.flight.releaseSeats(booking.numberOfTickets);
            // Xóa booking
            this.bookingRepo.remove(b => b.bookingId === bookingId);
        }
        else {
            alert("Không tìm thấy giao dịch để hủy!");
        }
    }
    listAvailableFlights(origin, destination) {
        const flights = this.flightRepo.getAll()
            .filter(f => f.origin === origin && f.destination === destination && !f.isFull());
        if (flights.length === 0) {
            alert("Không có chuyến bay nào phù hợp!");
        }
        else {
            const result = flights.map(f => `Số hiệu: ${f.flightNumber}, Từ: ${f.origin}, Đến: ${f.destination}, Giờ: ${f.departureTime.toLocaleString()}, Còn: ${f.seatsLeft()} ghế`)
                .join("\n");
            alert(`Danh sách chuyến bay còn chỗ:\n${result}`);
        }
    }
    listBookingsByPassenger(passengerId) {
        const bookings = this.bookingRepo.getAll()
            .filter(b => b.passenger.passengerId === passengerId);
        if (bookings.length === 0) {
            alert("Không có vé nào được đặt cho hành khách này!");
        }
        else {
            const result = bookings.map(b => b.getBookingDetails()).join("\n");
            alert(`Danh sách vé đã đặt:\n${result}`);
        }
    }
    calculateTotalRevenue() {
        return this.bookingRepo.getAll().reduce((sum, b) => sum + b.totalCost, 0);
    }
    countFlightsByType() {
        const flights = this.flightRepo.getAll();
        const result = flights.reduce((acc, f) => {
            const type = f instanceof DomesticFlight ? "Nội địa" : "Quốc tế";
            acc[type] = (acc[type] || 0) + 1;
            return acc;
        }, {});
        const output = Object.entries(result)
            .map(([type, count]) => `${type}: ${count} chuyến`)
            .join("\n");
        alert(`Thống kê số lượng chuyến bay:\n${output}`);
    }
    updateFlightTime(flightNumber, newDepartureTime) {
        const flight = this.flightRepo.find(f => f.flightNumber === flightNumber);
        if (flight) {
            flight.departureTime = newDepartureTime;
            alert(`Cập nhật giờ bay cho chuyến ${flightNumber} thành công!`);
        }
        else {
            alert(`Không tìm thấy chuyến bay ${flightNumber}!`);
        }
    }
    getFlightPassengerList(flightNumber) {
        const bookings = this.bookingRepo.getAll()
            .filter(b => b.flight.flightNumber === flightNumber);
        if (bookings.length === 0) {
            alert(`Không có hành khách nào trên chuyến bay ${flightNumber}!`);
            return;
        }
        // Gộp theo hành khách và đếm tổng số vé
        const byPassenger = bookings.reduce((acc, b) => {
            const key = `${b.passenger.passengerId}-${b.passenger.name}`;
            acc[key] = (acc[key] || 0) + b.numberOfTickets;
            return acc;
        }, {});
        const lines = Object.entries(byPassenger).map(([key, cnt]) => {
            const name = key.split("-").slice(1).join("-");
            return `${name}: ${cnt} vé`;
        });
        alert(`Danh sách hành khách trên chuyến ${flightNumber}:\n${lines.join("\n")}`);
    }
}
// ====== UI (prompt/alert) ======
const airlineManager = new AirlineManager();
function addPassengerUI() {
    const name = prompt("Nhập tên hành khách:");
    const passportNumber = prompt("Nhập số hộ chiếu:");
    if (name && passportNumber) {
        airlineManager.addPassenger(name, passportNumber);
        alert("Thêm hành khách thành công!");
    }
    else {
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
}
function addFlightUI() {
    const flightType = prompt("Loại chuyến bay (domestic/international):");
    const flightNumber = prompt("Số hiệu chuyến bay:");
    const origin = prompt("Điểm đi:");
    const destination = prompt("Điểm đến:");
    const capacity = parseInt(prompt("Sức chứa:") || "0", 10);
    const departureTime = prompt("Giờ khởi hành (yyyy-mm-dd hh:mm):");
    if (flightType && flightNumber && origin && destination && capacity && departureTime) {
        const parsedTime = new Date(departureTime);
        if (isNaN(parsedTime.getTime())) {
            alert("Định dạng giờ khởi hành không hợp lệ!");
            return;
        }
        const type = flightType.toLowerCase().trim();
        const flight = type === "domestic"
            ? new DomesticFlight(flightNumber, origin, destination, parsedTime, capacity)
            : new InternationalFlight(flightNumber, origin, destination, parsedTime, capacity);
        airlineManager.addFlight(flight);
        alert("Thêm chuyến bay thành công!");
    }
    else {
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
}
function createBookingUI() {
    const passengerId = parseInt(prompt("Nhập ID hành khách:") || "0", 10);
    const flightNumber = prompt("Nhập số hiệu chuyến bay:");
    const numberOfTickets = parseInt(prompt("Nhập số lượng vé:") || "0", 10);
    const totalBaggageKg = parseFloat(prompt("Tổng kg hành lý cho booking này (có thể 0):") || "0");
    if (passengerId && flightNumber && numberOfTickets >= 1 && totalBaggageKg >= 0) {
        const booking = airlineManager.createBooking(passengerId, flightNumber, numberOfTickets, totalBaggageKg);
        if (booking) {
            alert("Đặt vé thành công!\n" + booking.getBookingDetails());
        }
    }
    else {
        alert("Vui lòng nhập đầy đủ/thích hợp thông tin!");
    }
}
function cancelBookingUI() {
    const bookingId = parseInt(prompt("Nhập ID giao dịch cần hủy:") || "0", 10);
    if (bookingId) {
        airlineManager.cancelBooking(bookingId);
        alert("Đã xử lý yêu cầu hủy (nếu tìm thấy)!");
    }
    else {
        alert("Vui lòng nhập ID hợp lệ!");
    }
}
function listAvailableFlightsUI() {
    const origin = prompt("Nhập điểm đi:");
    const destination = prompt("Nhập điểm đến:");
    if (origin && destination) {
        airlineManager.listAvailableFlights(origin, destination);
    }
    else {
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
}
function listBookingsByPassengerUI() {
    const passengerId = parseInt(prompt("Nhập ID hành khách:") || "0", 10);
    if (passengerId) {
        airlineManager.listBookingsByPassenger(passengerId);
    }
    else {
        alert("Vui lòng nhập ID hợp lệ!");
    }
}
function calculateTotalRevenueUI() {
    const total = airlineManager.calculateTotalRevenue();
    alert("Tổng doanh thu: " + total.toLocaleString() + " VND");
}
function countFlightsByTypeUI() {
    airlineManager.countFlightsByType();
}
function updateFlightTimeUI() {
    const flightNumber = prompt("Nhập số hiệu chuyến bay:");
    const newTime = prompt("Nhập giờ bay mới (yyyy-mm-dd hh:mm):");
    if (flightNumber && newTime) {
        const parsedTime = new Date(newTime);
        if (isNaN(parsedTime.getTime())) {
            alert("Định dạng giờ khởi hành không hợp lệ!");
            return;
        }
        airlineManager.updateFlightTime(flightNumber, parsedTime);
    }
    else {
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
}
function getFlightPassengerListUI() {
    const flightNumber = prompt("Nhập số hiệu chuyến bay:");
    if (flightNumber) {
        airlineManager.getFlightPassengerList(flightNumber);
    }
    else {
        alert("Vui lòng nhập số hiệu chuyến bay!");
    }
}
window.addPassengerUI = addPassengerUI;
window.addFlightUI = addFlightUI;
window.createBookingUI = createBookingUI;
window.cancelBookingUI = cancelBookingUI;
window.listAvailableFlightsUI = listAvailableFlightsUI;
window.listBookingsByPassengerUI = listBookingsByPassengerUI;
window.calculateTotalRevenueUI = calculateTotalRevenueUI;
window.countFlightsByTypeUI = countFlightsByTypeUI;
window.updateFlightTimeUI = updateFlightTimeUI;
window.getFlightPassengerListUI = getFlightPassengerListUI;