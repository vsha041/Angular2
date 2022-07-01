using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace EmployeeWebAPIService.Controllers
{
    public class EmployeesController : ApiController
    {
        // GET: Employees
        public IEnumerable<Employee> Get()
        {
            using (var entities = new EmployeeDBEntities())
            {
                return entities.Employees.ToList();
            }
        }

        public Employee Get(string code)
        {
            using (var entities = new EmployeeDBEntities())
            {
                return entities.Employees.FirstOrDefault(x => x.code == code);
            }
        }
    }
}