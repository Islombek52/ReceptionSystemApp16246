namespace ReceptionSystemAPI.Models
{
    public class User
    {
        public int id { get; set; }
        public required string username { get; set; }
        public required string password { get; set; }
        public required string role { get; set; }
    }
}
