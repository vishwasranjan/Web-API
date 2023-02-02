using Microsoft.EntityFrameworkCore;
namespace JR_Assignment1_WebAPI.Models
{
    public class JRDbContext:DbContext
    {
        public JRDbContext(DbContextOptions<JRDbContext> options):base(options)
        {

        }
        public DbSet<UserDetails> UserDetails { get; set; }
        public DbSet<Login> logins { get; set; }
        public DbSet<ExamDeatils> ExamDeatils { get; set; }

    }
}
