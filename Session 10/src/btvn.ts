class Passenger {
    private static nextId: number = 1;
    public passengerId: number;

    constructor(
        public name: string,
        public passportNumber: string
    ) {
        this.passengerId = Passenger.nextId++;
    }

    getDetails(): string {
        return `PassengerID: ${this.passengerId}, Name: ${this.name}, Passport: ${this.passportNumber}`;
    }
}

abstract class Flight {
    public bookedSeats: number = 0;

    constructor(
        public flightNumber: string,
        public origin: string,
        public destination: string,
        public departureTime: Date,
        public capacity: number
    ) {}

    /** Số ghế còn lại */
    seatsLeft(): number {
        return Math.max(0, this.capacity - this.bookedSeats);
    }

    /** Đặt ghế theo số lượng (có kiểm tra capacity) */
    bookSeats(qty: number): boolean {
        if (qty <= 0) return false;
        if (this.bookedSeats + qty > this.capacity) return false;
        this.bookedSeats += qty;
        return true;
    }

    /** Trả ghế khi hủy booking */
    releaseSeats(qty: number): void {
        this.bookedSeats = Math.max(0, this.bookedSeats - Math.max(0, qty));
    }

    isFull(): boolean {
        return this.bookedSeats >= this.capacity;
    }

    /** Phí hành lý theo kg (VND) */
    abstract calculateBaggageFee(weightKg: number): number;

    /** Giá vé cơ bản (VND) theo loại chuyến */
    abstract getBaseFare(): number;
}

class DomesticFlight extends Flight {
    calculateBaggageFee(weightKg: number): number {
        return Math.max(0, weightKg) * 50_000;
    }
    getBaseFare(): number {
        return 1_000_000;
    }
}

class InternationalFlight extends Flight {
    /** Tỷ giá USD→VND (có thể chỉnh) */
    static readonly EXRATE_USD_VND = 25_000;

    calculateBaggageFee(weightKg: number): number {
        const usd = Math.max(0, weightKg) * 10; // 10 USD/kg
        return usd * InternationalFlight.EXRATE_USD_VND;
    }
    getBaseFare(): number {
        return 2_000_000;
    }
}

class Booking {
    private static nextId: number = 1;
    public bookingId: number;
    public totalCost: number;

    constructor(
        public passenger: Passenger,
        public flight: Flight,
        public numberOfTickets: number,
        /** Tổng kg hành lý của booking (cộng tất cả vé) */
        public totalBaggageKg: number
    ) {
        this.bookingId = Booking.nextId++;
        const baseFare = flight.getBaseFare();
        const baggageFee = flight.calculateBaggageFee(totalBaggageKg);
        this.totalCost = baseFare * numberOfTickets + baggageFee;
    }

    getBookingDetails(): string {
        return `BookingID: ${this.bookingId}, Passenger: ${this.passenger.name}, Flight: ${this.flight.flightNumber}, Tickets: ${this.numberOfTickets}, Baggage: ${this.totalBaggageKg}kg, TotalCost: ${this.totalCost.toLocaleString()} VND`;
    }
}

class GenericRepository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }

    find(predicate: (item: T) => boolean): T | undefined {
        return this.items.find(predicate);
    }

    findIndex(predicate: (item: T) => boolean): number {
        return this.items.findIndex(predicate);
    }

    remove(predicate: (item: T) => boolean): void {
        this.items = this.items.filter(item => !predicate(item));
    }
}

class AirlineManager {
    private flightRepo = new GenericRepository<Flight>();
    private passengerRepo = new GenericRepository<Passenger>();
    private bookingRepo = new GenericRepository<Booking>();

    addFlight(flight: Flight): void {
        // Đảm bảo flightNumber duy nhất
        const existed = this.flightRepo.find(f => f.flightNumber === flight.flightNumber);
        if (existed) {
            alert(`Số hiệu chuyến bay "${flight.flightNumber}" đã tồn tại!`);
            return;
        }
        this.flightRepo.add(flight);
    }

    addPassenger(name: string, passportNumber: string): void {
        // Có thể thêm kiểm tra trùng passport nếu muốn
        const p = new Passenger(name, passportNumber);
        this.passengerRepo.add(p);
    }

    createBooking(passengerId: number, flightNumber: string, numberOfTickets: number, totalBaggageKg: number): Booking | null {
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

    cancelBooking(bookingId: number): void {
        const booking = this.bookingRepo.find(b => b.bookingId === bookingId);
        if (booking) {
            // Trả ghế
            booking.flight.releaseSeats(booking.numberOfTickets);
            // Xóa booking
            this.bookingRepo.remove(b => b.bookingId === bookingId);
        } else {
            alert("Không tìm thấy giao dịch để hủy!");
        }
    }

    listAvailableFlights(origin: string, destination: string): void {
        const flights = this.flightRepo.getAll()
            .filter(f => f.origin === origin && f.destination === destination && !f.isFull());

        if (flights.length === 0) {
            alert("Không có chuyến bay nào phù hợp!");
        } else {
            const result = flights.map(f =>
                `Số hiệu: ${f.flightNumber}, Từ: ${f.origin}, Đến: ${f.destination}, Giờ: ${f.departureTime.toLocaleString()}, Còn: ${f.seatsLeft()} ghế`)
                .join("\n");
            alert(`Danh sách chuyến bay còn chỗ:\n${result}`);
        }
    }

    listBookingsByPassenger(passengerId: number): void {
        const bookings = this.bookingRepo.getAll()
            .filter(b => b.passenger.passengerId === passengerId);

        if (bookings.length === 0) {
            alert("Không có vé nào được đặt cho hành khách này!");
        } else {
            const result = bookings.map(b => b.getBookingDetails()).join("\n");
            alert(`Danh sách vé đã đặt:\n${result}`);
        }
    }

    calculateTotalRevenue(): number {
        return this.bookingRepo.getAll().reduce((sum, b) => sum + b.totalCost, 0);
    }

    countFlightsByType(): void {
        const flights = this.flightRepo.getAll();
        const result = flights.reduce((acc: Record<string, number>, f) => {
            const type = f instanceof DomesticFlight ? "Nội địa" : "Quốc tế";
            acc[type] = (acc[type] || 0) + 1;
            return acc;
        }, {});
        const output = Object.entries(result)
            .map(([type, count]) => `${type}: ${count} chuyến`)
            .join("\n");
        alert(`Thống kê số lượng chuyến bay:\n${output}`);
    }

    updateFlightTime(flightNumber: string, newDepartureTime: Date): void {
        const flight = this.flightRepo.find(f => f.flightNumber === flightNumber);
        if (flight) {
            flight.departureTime = newDepartureTime;
            alert(`Cập nhật giờ bay cho chuyến ${flightNumber} thành công!`);
        } else {
            alert(`Không tìm thấy chuyến bay ${flightNumber}!`);
        }
    }

    getFlightPassengerList(flightNumber: string): void {
        const bookings = this.bookingRepo.getAll()
            .filter(b => b.flight.flightNumber === flightNumber);

        if (bookings.length === 0) {
            alert(`Không có hành khách nào trên chuyến bay ${flightNumber}!`);
            return;
        }

        // Gộp theo hành khách và đếm tổng số vé
        const byPassenger = bookings.reduce((acc: Record<string, number>, b) => {
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
    } else {
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
    } else {
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
    } else {
        alert("Vui lòng nhập đầy đủ/thích hợp thông tin!");
    }
}

function cancelBookingUI() {
    const bookingId = parseInt(prompt("Nhập ID giao dịch cần hủy:") || "0", 10);
    if (bookingId) {
        airlineManager.cancelBooking(bookingId);
        alert("Đã xử lý yêu cầu hủy (nếu tìm thấy)!");
    } else {
        alert("Vui lòng nhập ID hợp lệ!");
    }
}

function listAvailableFlightsUI() {
    const origin = prompt("Nhập điểm đi:");
    const destination = prompt("Nhập điểm đến:");
    if (origin && destination) {
        airlineManager.listAvailableFlights(origin, destination);
    } else {
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
}

function listBookingsByPassengerUI() {
    const passengerId = parseInt(prompt("Nhập ID hành khách:") || "0", 10);
    if (passengerId) {
        airlineManager.listBookingsByPassenger(passengerId);
    } else {
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
    } else {
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
}

function getFlightPassengerListUI() {
    const flightNumber = prompt("Nhập số hiệu chuyến bay:");
    if (flightNumber) {
        airlineManager.getFlightPassengerList(flightNumber);
    } else {
        alert("Vui lòng nhập số hiệu chuyến bay!");
    }
}

(window as any).addPassengerUI = addPassengerUI;
(window as any).addFlightUI = addFlightUI;
(window as any).createBookingUI = createBookingUI;
(window as any).cancelBookingUI = cancelBookingUI;
(window as any).listAvailableFlightsUI = listAvailableFlightsUI;
(window as any).listBookingsByPassengerUI = listBookingsByPassengerUI;
(window as any).calculateTotalRevenueUI = calculateTotalRevenueUI;
(window as any).countFlightsByTypeUI = countFlightsByTypeUI;
(window as any).updateFlightTimeUI = updateFlightTimeUI;
(window as any).getFlightPassengerListUI = getFlightPassengerListUI;