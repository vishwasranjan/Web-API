using System.ComponentModel.DataAnnotations;

namespace JR_Assignment1_WebAPI.Models
{
    public class Login
    {
        [Key]
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
