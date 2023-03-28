using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DisasterAPI.Data;
using DisasterAPI.Models;

namespace DisasterAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DisastersController : ControllerBase
    {
        private readonly DisasterDBContext _context;

        public DisastersController(DisasterDBContext context)
        {
            _context = context;
        }

        // GET: api/Disasters
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Disaster>>> GetDisasters()
        {
          if (_context.Disasters == null)
          {
              return NotFound();
          }
            return await _context.Disasters.ToListAsync();
        }

        // GET: api/Disasters/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Disaster>> GetDisaster(int id)
        {
          if (_context.Disasters == null)
          {
              return NotFound();
          }
            var disaster = await _context.Disasters.FindAsync(id);

            if (disaster == null)
            {
                return NotFound();
            }

            return disaster;
        }

        // PUT: api/Disasters/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDisaster(int id, Disaster disaster)
        {
            if (id != disaster.Id)
            {
                return BadRequest();
            }

            _context.Entry(disaster).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DisasterExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Disasters
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Disaster>> PostDisaster(Disaster disaster)
        {
          if (_context.Disasters == null)
          {
              return Problem("Entity set 'DisasterDBContext.Disasters'  is null.");
          }
            _context.Disasters.Add(disaster);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDisaster", new { id = disaster.Id }, disaster);
        }

        // DELETE: api/Disasters/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDisaster(int id)
        {
            if (_context.Disasters == null)
            {
                return NotFound();
            }
            var disaster = await _context.Disasters.FindAsync(id);
            if (disaster == null)
            {
                return NotFound();
            }

            _context.Disasters.Remove(disaster);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DisasterExists(int id)
        {
            return (_context.Disasters?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
