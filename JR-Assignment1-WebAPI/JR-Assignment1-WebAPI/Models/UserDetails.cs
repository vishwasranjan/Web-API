using System.ComponentModel.DataAnnotations;

namespace JR_Assignment1_WebAPI.Models
{
    public class UserDetails
    {
        [Key]
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public int Phone { get; set; }
    }
}
