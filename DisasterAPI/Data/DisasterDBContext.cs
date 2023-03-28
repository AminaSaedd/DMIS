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

    }
}
