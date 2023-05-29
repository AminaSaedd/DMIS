using DisasterAPI.Data;
using DisasterAPI.Extentions;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

//dbContextInjection
builder.Services.AddSingleton<IConfiguration>(builder.Configuration);
builder.Services.AddScoped<Logger>();
builder.Services.AddHttpContextAccessor();

builder.Services.AddDbContext<DisasterDBContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("conection")));
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors(options =>
        options.AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader());
app.UseAuthorization();

app.MapControllers();
app.MapGet("/api/status", () =>
{
    return Results.Ok("API is working...");
});
app.Run();
