using JR_Assignment1_WebAPI.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.Add(new ServiceDescriptor(typeof(JRInterface),typeof(DataAccessLayer),ServiceLifetime.Transient));
builder.Services.AddDbContext<JRDbContext>(options =>
{
    options.UseSqlServer("Data Source=.\\sqlexpress;Initial Catalog=API;Integrated Security=True;Encrypt=False");
    //
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("clients-allowed", policy =>
    {
        policy.WithOrigins("http://localhost:4200")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("clients-allowed");
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
