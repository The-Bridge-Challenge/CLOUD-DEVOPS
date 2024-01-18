resource "google_compute_instance" "default" {
  name         = var.vm_name
  machine_type = "f1-micro"

  boot_disk {
    initialize_params {
      image = "ubuntu"
    }
  }

  network_interface {
    network = "default"

}
