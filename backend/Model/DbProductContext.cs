using Microsoft.EntityFrameworkCore;

namespace projectF.Model
{
    public class DbProductContext : DbContext
    {
        public DbSet<Product> Products { get; set; }

        public DbProductContext(DbContextOptions options) : base(options)
        {
                
        }
    }
}
