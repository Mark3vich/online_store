using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
        public async Task<ActionResult<List<Product>>> SearchProduct(string searchString = "")
        {   
            // Исключения, которые приводят сразу к выводу ошибки 
            if (string.IsNullOrEmpty(searchString) || searchString == "")
            {
                return Ok("Empty");
            }

            // Преобразования строки к тому или иному виду 
            searchString = searchString.Trim();
            searchString = searchString.ToLower();
            searchString = char.ToUpper(searchString[0]) + searchString.Substring(1);
            // Console.WriteLine(searchString);
            
            // Сам запрос
            var products = _context.Product.Where(product => EF.Functions.Like(product.ProductName, $"%{searchString}%"));
            
            // Если запрос прошел не успешно 
            if(!products.Any()) return Ok("NotFound");

            // Строчка под вопросом 
            await _context.SaveChangesAsync();
           
            return Ok(products);
        }
    }
}