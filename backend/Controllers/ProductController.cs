using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly DataContext _context;
        public ProductController(DataContext context) {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Product>>> getProduct()
        {
            return Ok(await _context.Product.ToArrayAsync());
        }
    }
}