using ReceptionSystemAPI.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers(); // Add API controller services

// Register the DbContext with the service container before building the app
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Enable CORS to allow the Angular app to make requests
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularApp", builder =>
        builder.WithOrigins("http://localhost:4200") // Allow requests from Angular (localhost:4200)
               .AllowAnyHeader()
               .AllowAnyMethod());
});



var app = builder.Build(); // Build the application after registering services

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

// Serve static files (for Angular app)
app.UseDefaultFiles();  // Serve default files like index.html
app.UseStaticFiles();   // Serve static assets like JS, CSS, etc.

app.UseRouting();

// Use the CORS policy before authorization
//app.UseCors("AllowAngularApp");

app.UseCors(builder =>
    builder.WithOrigins("http://localhost:4200")
           .AllowAnyHeader()
           .AllowAnyMethod());


app.UseAuthorization();

// Map API controllers
app.MapControllers(); // This maps API routes like api/users

// Serve Angular app for non-API routes
app.MapFallbackToFile("index.html");  // This ensures any unknown routes are handled by Angular's router

app.Run();
