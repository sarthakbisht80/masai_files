interface IBooking{
book():string;

}
interface IItinerary{
    display():string;

}
interface IInvoice {
    generate():string;
}

//conceretec
class FlightBooking implements IItinerary{
    display(): string {
        return "flight booked with Indigo.";
    }
}
class FlightItinerary implements IItinerary{
    display(): string {
        return "Displaying Flight itinerary";
    }
}
class FlightInvoice implements IInvoice{
    generate(): string {
        return "generating flight invoice";
    }
}

class HotelBooking implements IBooking{
    book(): string {
        return "hotel booked at Marriott";
    }
}
class HotelItinerary implements IItinerary{
    display(): string {
        return "Displaying hotel itinerary";
    }
}
class HotelInvoice implements IInvoice{
    generate(): string {
        return "generating hotel invoice";
    }
}


//abstaract factory interface
interface IBookingProviderFactory{
    createBooking(): IBooking
createItinerary(): IItinerary
createInvoice(): IInvoice

}

//concerete factories

class FlightProviderFactory implements IBookingProviderFactory{
    createBooking(): IBooking {
        return new FlightBooking();
    }
    createItinerary(): IItinerary {
        return new FlightItinerary();
    }
    createInvoice(): IInvoice {
        return new FlightInvoice();
    }
}

class HotelProviderFactory implements IBookingProviderFactory{
    createBooking(): IBooking {
        return  new HotelBooking();
    }
    createItinerary(): IItinerary {
        return new HotelItinerary();
    }
    createInvoice(): IInvoice {
        return new HotelInvoice();
    }
}