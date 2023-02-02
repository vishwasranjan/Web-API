using JR_Assignment1_WebAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace JR_Assignment1_WebAPI.Controllers
{
    [ApiController]
    [Route("Controller")]
    public class JR_Assignment_Controller:ControllerBase
    {
        private readonly JRInterface _jRInterface;
        public JR_Assignment_Controller(JRInterface jRInterface)
        {
            _jRInterface = jRInterface;
        }

        [HttpGet]
        [Route("GetAllUsers")]
        public IEnumerable<UserDetails> GetAllUsers()
        {
           return _jRInterface.Users();
        }

        [HttpGet]
        [Route("LoginUser")]
        public Boolean UserLogin(string username,string password)
        {
            return _jRInterface.LoginUser(username,password);
        }

        [HttpPost]
        [Route("AddUser")]
        public void AddUser(UserDetails userDetails)
        {
            _jRInterface.AddUser(userDetails);
        }

        [HttpGet]
        [Route("ExamDeatilsByID")]
        public IEnumerable<ExamDeatils> GetExamDeatilsById(int id)
        {
            return _jRInterface.ExamDeatilsById(id);
        }



        
    }
}
