using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<Product>>> getProduct()
        {
            return new List<Product> { new Product {
                Price = 10,
                ProductName = "sddssd",
                ProductDescription = "sdfsd",
                LinkToThePicture = "dssdfsdf"
            } };
        }
    }
}