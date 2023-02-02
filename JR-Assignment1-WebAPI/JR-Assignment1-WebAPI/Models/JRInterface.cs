using Microsoft.EntityFrameworkCore;

namespace JR_Assignment1_WebAPI.Models
{
    public interface JRInterface
    {
        public List<UserDetails> Users();
        public Boolean LoginUser(string username,string password);
        public void AddUser(UserDetails user);

        public List<ExamDeatils> ExamDeatilsById(int id);
        
    }
}
