terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "3.87.0"
    }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
  zone    = var.zone
}

module "cloud_sql" {
  source = "./modules/cloud_sql"
  name   = var.database_name
}

module "vm_instance" {
  source = "./modules/vm_instance"
  name   = var.vm_name
}

module "cloud_run" {
  source = "./modules/cloud_run"
  name   = var.cloudrun_service_name
}

