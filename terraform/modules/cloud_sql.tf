resource "google_sql_database_instance" "default" {
  name             = var.database_name
  database_version = "POSTGRES_9_6"
  region           = "europe-west1"

  settings {
    tier = "db-f1-micro"
  }
}