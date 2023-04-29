using DisasterAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Data;
using System.Net.Sockets;

namespace DisasterAPI.Data
{
    public class DisasterDBContext : DbContext
    {
        public DisasterDBContext(DbContextOptions<DisasterDBContext> options) : base(options)
        {

        }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Disaster> Disasters { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Disaster>().Property(r => r.Images).HasConversion(v => string.Join(',', v), v => v.Split(',', StringSplitOptions.RemoveEmptyEntries).ToList()); // converty array to comma separted strings and vice versa for that collumn
              }
    }
}
