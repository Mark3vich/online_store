using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SearchController : ControllerBase
    {
        private readonly DataContext _context;
        public SearchController(DataContext context) {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<MobilePhones>>> SearchMobilePhones(string searchString = "")
        {   
            // Исключения, которые приводят сразу к выводу ошибки 
            if (searchString == "")
            {
                return Ok("Empty");
            }

            // Преобразования строки к тому или иному виду 
            searchString = searchString.Trim();
            searchString = searchString.ToLower();
            searchString = Regex.Replace(searchString, @"\s+", " ");
            
            // Сам запрос
            var products = _context.MobilePhones.Where(p => p.ProductName.ToLower().Contains(searchString));

            // Если запрос прошел не успешно 
            if(!products.Any()) return Ok("NotFound");

            // Строчка под вопросом 
            await _context.SaveChangesAsync();

            return Ok(products);
        }
    }
}