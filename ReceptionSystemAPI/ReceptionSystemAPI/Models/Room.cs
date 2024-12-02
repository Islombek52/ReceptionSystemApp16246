namespace ReceptionSystemAPI.Models
{
    public class Room
    {
        public int id { get; set; }
        public string roomNumber { get; set; }
        public string type { get; set; }
        public bool isAvailable { get; set; }
        public decimal price { get; set; }
    }
}
