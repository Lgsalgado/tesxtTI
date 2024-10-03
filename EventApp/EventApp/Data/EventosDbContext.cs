using Microsoft.EntityFrameworkCore;
using EventosAPI.Models;

namespace EventosAPI.Data
{
    public class EventosDbContext : DbContext
    {
        public EventosDbContext(DbContextOptions<EventosDbContext> options) : base(options) { }

        public DbSet<Evento> Eventos { get; set; }
    }
}
