using System.ComponentModel.DataAnnotations;

namespace JR_Assignment1_WebAPI.Models
{
    public class ExamsList
    {
        [Key]
        public int Examid { get; set; }
        public string Subject { get; set; }
        public string Date { get; set; }
        public string Duration { get; set; }
        public string Mode { get; set; }
        
        public int Userid { get; set; }
        
    }
}
