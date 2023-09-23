// using Microsoft.EntityFrameworkCore;

// public class EfDemoDbContext: DbContext {
//     private readonly IConfiguration configuration;
//     public DbSet<Products> Products {get; set;}
//     public EfDemoDbContext(IConfiguration configuration)
//     {
//         this.configuration = configuration;
//     }
//     protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//     {
//         optionsBuilder.UseNpgsql(configuration.GetConnectionString("EFDemo"));
//     }
// }