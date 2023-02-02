using System.ComponentModel.DataAnnotations;

namespace JR_Assignment1_WebAPI.Models
{
    public class ExamDeatils
    {
        [Key]
        public int ExamId { get; set; }
        public int UserId { get; set; }
        public string Subject { get; set; }
        public string SubjectCode { get; set; }
        public string Duration { get; set; }
        public DateTime ExamDate { get; set; }
    }
}
