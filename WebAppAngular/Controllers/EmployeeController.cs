using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebAppAngular.Models;

namespace WebAppAngular.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee
        public ActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// GetAll() employee
        /// </summary>
        /// <returns></returns>
        public JsonResult GetAll()
        {
            return Json(Employees(), JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// Get employee by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public JsonResult GetById(int id)
        {
            var data = Employees().First(f => f.EmployeeId == id);
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        public List<EmployeeModel> Employees()
        {
            var list = new List<EmployeeModel>() {
                new EmployeeModel
                {
                    EmployeeId = 1,
                    EmployeeName = "Alfan",
                    EmployeeAddress = "Jl Kenangan",
                    EmployeePhoneNumber = "083930"
                },
                new EmployeeModel
                {
                    EmployeeId = 2,
                    EmployeeName = "zah",
                    EmployeeAddress = "Jl Japos",
                    EmployeePhoneNumber = "083930"
                },
                new EmployeeModel
                {
                    EmployeeId = 3,
                    EmployeeName = "Ri",
                    EmployeeAddress = "Jl burangrang",
                    EmployeePhoneNumber = "083930"
                },
                new EmployeeModel
                {
                    EmployeeId = 4,
                    EmployeeName = "No",
                    EmployeeAddress = "Jl kembang",
                    EmployeePhoneNumber = "083930"
                },
            };
            
            return list;
        }
    }
}