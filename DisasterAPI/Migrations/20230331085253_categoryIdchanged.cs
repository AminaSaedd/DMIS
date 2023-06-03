using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DisasterAPI.Migrations
{
    public partial class categoryIdchanged : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CategoryId",
                table: "Categories",
                newName: "id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "id",
                table: "Categories",
                newName: "CategoryId");
        }
    }
}
