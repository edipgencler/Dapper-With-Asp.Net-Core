using Dapper;
using DapperAspNetCore.Models;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System.Collections.Generic;
using System.Linq;

namespace DapperAspNetCore.Controllers
{
    public class DapperController : Controller
    {
        private string _connectionString = "Server=localhost;Database=studentsavedb;Uid=root;Pwd=tc3byt9H.;";

        [HttpGet]
        public IActionResult Index()
        {
            var model = GetAll();

            return View(model);
        }

        [HttpGet]
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(Students model)
        {
            using (MySqlConnection _conn = new MySqlConnection(_connectionString))
            {
                _conn.Open();

                string command = "Insert into students(TcNo,Ad,Soyad,Cinsiyet,DogumTarihi,Okul,Sınıf) values" +
                    "('" + model.TcNo + "'," +
                    "'" + model.Ad + "'," +
                    "'" + model.Soyad + "'," +
                    "'" + model.Cinsiyet + "'," +
                    "'" + model.DogumTarihi + "'," +
                    "'" + model.Okul + "'," +
                    "'" + model.Sınıf + "')";

                //aynı tc den var mı dıye kontrol et!
                string getModel = "SELECT * FROM studentsavedb.students";
                var current = _conn.Query<Students>(getModel).FirstOrDefault(x => x.TcNo == model.TcNo);
                if (current == null)
                {
                    _conn.Execute(command);
                }

                _conn.Close();
            }

            return Json(model);
        }

        public List<Students> GetAll()
        {
            using (MySqlConnection conn = new MySqlConnection(_connectionString))
            {
                string query = "Select * From students";
                var list = conn.Query<Students>(query).ToList();

                conn.Close();
                return list;
            }
        }
    }
}