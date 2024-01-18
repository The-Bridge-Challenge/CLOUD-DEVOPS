variable "project_id" {
  description = "The ID of the project in which resources will be managed."
  type        = string
}

variable "region" {
  description = "The region in which resources will be managed."
  type        = string
  default     = "europe-west1"
}

variable "zone" {
  description = "The zone in which resources will be managed."
  type        = string
  default     = "europe-west1-a"
}

variable "database_name" {
  description = "The name of the Cloud SQL database."
  type        = string
  default     = "postgres"
}

variable "vm_name" {
  description = "The name of the VM instance."
  type        = string
  default     = "webscrapping"
}

variable "cloudrun_service_name" {
  description = "The name of the Cloud Run service."
  type        = string
  default     = "cloudbuilds-client/server"
}
