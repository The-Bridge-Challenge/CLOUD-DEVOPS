resource "google_cloud_run_service" "default" {
  name     = var.cloudrun_service_name
  location = "europe-west1"

  template {
    spec {
      containers {
        image = "image=gcr.io/$PROJECT_ID/app:$COMMIT_SHA"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}
