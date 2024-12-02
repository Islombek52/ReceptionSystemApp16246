namespace ReceptionSystemAPI.Models
{
    public class Reservation
    {
        public int id { get; set; }
        public int guestId { get; set; }
        public int roomId { get; set; }
        public DateTime checkInDate { get; set; }
        public DateTime checkOutDate { get; set; }

        public Guest Guest { get; set; }
        public Room Room { get; set; }
    }
}
