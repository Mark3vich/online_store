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
            if (string.IsNullOrEmpty(searchString) || searchString == "")
            {
                return Ok("Empty");
            }
            searchString = searchString.Trim();
            var products = _context.Product.Where(product => EF.Functions.Like(product.ProductName, $"%{searchString}%"));
            return Ok(products);
        }
    }
}