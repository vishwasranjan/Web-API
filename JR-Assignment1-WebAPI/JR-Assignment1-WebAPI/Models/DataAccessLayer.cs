namespace JR_Assignment1_WebAPI.Models
{
    public class DataAccessLayer:JRInterface
    {
        private readonly JRDbContext jRDbContext;
        public DataAccessLayer(JRDbContext jRDbContext)
        {
            this.jRDbContext = jRDbContext;
        }

        public void AddUser(UserDetails user)
        {
            jRDbContext.Add(user);
            jRDbContext.SaveChanges();
        }

        public List<ExamDeatils> ExamDeatilsById(int id)
        {
            var user = jRDbContext.UserDetails.Where(o => o.UserId == id);
            if (user == null)
            {
                return null;
            }
            else
            {
                return jRDbContext.ExamDeatils.Where(o => o.UserId == id).ToList();
            }
        }

        public bool LoginUser(string username,string password)
        {
            var user = jRDbContext.logins.Where(o => (o.Username == username && o.Password == password)).SingleOrDefault();
            if(user == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        public List<UserDetails> Users()
        {
            return jRDbContext.UserDetails.ToList();
        }

        
    }
}
