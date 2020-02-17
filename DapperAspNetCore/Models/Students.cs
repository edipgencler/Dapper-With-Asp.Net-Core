using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DapperAspNetCore.Models
{
    public class Students
    {
        public int Id { get; set; }
        public string TcNo { get; set; }
        public string Ad { get; set; }
        public string Soyad { get; set; }
        public string Cinsiyet { get; set; }
        public string DogumTarihi { get; set; }
        public string Okul { get; set; }
        public string Sınıf { get; set; }
    }
}
