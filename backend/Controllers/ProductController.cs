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
        public async Task<ActionResult<List<Product>>> GetProduct()
        {
            return Ok(await _context.Product.ToArrayAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<Product>>> PostProduct(Product product)
        {
            _context.Add(product);
            await _context.SaveChangesAsync();
            return Ok(await _context.Product.ToArrayAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Product>>> UpdateProduct(Product product)
        {
            var dbProduct = await _context.Product.FindAsync(product.Id);
            if(dbProduct == null) {
                return BadRequest("Product not found");
            }
            dbProduct.Price = product.Price;
            dbProduct.ProductName = product.ProductName;
            dbProduct.ProductDescription = product.ProductDescription;
            dbProduct.LinkToThePicture = product.LinkToThePicture;

            await _context.SaveChangesAsync();
            return Ok(await _context.Product.ToArrayAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Product>>> DeleteUsers(int id)
        {
            var dbProduct = await _context.Product.FindAsync(id);
            if (dbProduct == null)
            {
                return BadRequest("Product not found");
            }
            _context.Product.Remove(dbProduct);
            await _context.SaveChangesAsync();

            return Ok(await _context.Product.ToListAsync());
        }
    }
}