using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DisasterAPI.Data;
using DisasterAPI.Models;
using DisasterAPI.DTOs;
using Microsoft.Extensions.Hosting.Internal;
using DisasterAPI.Extentions;
using Microsoft.Extensions.Hosting;

namespace DisasterAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DisastersController : ControllerBase
    {
        private readonly DisasterDBContext _context;
        public static IWebHostEnvironment _environment;
        public DisastersController(DisasterDBContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
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
        public async Task<IActionResult> PutDisaster(int id, EditDisasterDTO editDisaster)
        {
            if (editDisaster is null)
            {
                return BadRequest();
            }

            var disaster = await _context.Disasters.FirstOrDefaultAsync(e => e.Id == id);
            if (disaster is null) return NotFound();

            if (disaster == null) return BadRequest();

            disaster.CategoryId = editDisaster.CategoryId;
            disaster.Description = editDisaster.Description;
            disaster.TypeOfDisaster = editDisaster.TypeOfDisaster;
            disaster.District = editDisaster.District;
            disaster.Neighborhood = editDisaster.Neighborhood;

            await _context.SaveChangesAsync();
            _context.Entry(disaster).State = EntityState.Modified;


            return NoContent();
        }

    
    // POST: api/Disasters
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
        public async Task<ActionResult<Disaster>> PostDisaster([FromForm] PostDisasterDTO record)
        {
            try
            {
                if (_context.Disasters == null)
                {
                    return Problem("Entity set 'DisasterDBContext.Disasters'  is null.");
                }
                Logger.LogInfo($"Here is images{record.Images}");
                var imageList = new List<string>();
                string newPath = Path.Combine(_environment.WebRootPath, "Images");

                if (!Directory.Exists(newPath))
                {
                    Directory.CreateDirectory(newPath);
                }
                foreach (var file in record.Images)
                {
                    if (file.Length > 0)
                    {
                        var fileName = Guid.NewGuid().ToString().Replace("-", "") + Path.GetExtension(file.FileName);
                        var filePath = Path.Combine(newPath, fileName);

                        using (var stream = new FileStream(filePath, FileMode.Create))
                        {
                            await file.CopyToAsync(stream);
                        }
                        //using var fileStream = new FileStream(Path.Combine(newPath, fileName), FileMode.Create);
                        //await file.CopyToAsync(fileStream);

                        imageList.Add(fileName);
                    }
                }

                var disaster = new Disaster
                {
                    CategoryId = 1,
                    Description = record.Description,
                    TypeOfDisaster = "record.TypeOfDisaster",
                    District = "record.District",
                    Neighborhood = "record.Neighborhood",
                    Location = "record.Location",
                    CurrentStatus = "record.CurrentStatus",
                    remarks = "record.remarks",
                    NumberOfDamagedHouses = "record.NumberOfDamagedHouses",
                    NumberOfDeaths = "record.NumberOfDeaths",
                    NumberOfInjuries = "record.NumberOfInjuries",
                    NumberOfSurvivors = "record.NumberOfSurvivors",
                    LossCost = " record.LossCost",
                    reportedBy = "record.reportedBy",
                    Contact = "record.Contact",
                    Lat = (double)record.Lat,
                    Long = (double)record.Long,
                    Images = imageList
                    // CategoryId = 1,
                    //Description = record.Description,
                    //TypeOfDisaster = record.TypeOfDisaster,
                    //District = record.District,
                    //Neighborhood = record.Neighborhood,
                    //Location = record.Location,
                    //CurrentStatus = record.CurrentStatus,
                    //remarks = record.remarks,
                    //NumberOfDamagedHouses = record.NumberOfDamagedHouses,
                    //NumberOfDeaths = record.NumberOfDeaths,
                    //NumberOfInjuries = record.NumberOfInjuries,
                    //NumberOfSurvivors = record.NumberOfSurvivors,
                    //LossCost = record.LossCost,
                    //reportedBy = record.reportedBy,
                    //Contact = record.Contact,
                    //Lat = record.Lat,
                    //Long = record.Long,
                    //Images = imageList

                };

                _context.Disasters.Add(disaster);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetDisaster", new { id = disaster.Id }, disaster);
            }
            catch (Exception ex)
            {
                Logger.LogError(ex);
                throw;
            }
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
