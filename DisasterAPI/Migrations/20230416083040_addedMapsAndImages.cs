using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DisasterAPI.Migrations
{
    public partial class addedMapsAndImages : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Images",
                table: "Disasters",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<double>(
                name: "Lat",
                table: "Disasters",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "Long",
                table: "Disasters",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Images",
                table: "Disasters");

            migrationBuilder.DropColumn(
                name: "Lat",
                table: "Disasters");

            migrationBuilder.DropColumn(
                name: "Long",
                table: "Disasters");
        }
    }
}
