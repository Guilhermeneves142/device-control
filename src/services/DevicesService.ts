class DevicesService {
  getRecentList() {
    return new Promise<Device.Device[]>((resolve, reject) => {
      fetch("/api/devices/recent-list")
        .then(async (response) => await response.json())
        .then(resolve)
        .catch((error) => reject(error));
    });
  }

  getList() {
    return new Promise<Device.Device[]>((resolve, reject) => {
      fetch("/api/devices/list")
        .then(async (response) => await response.json())
        .then(resolve)
        .catch((error) => reject(error));
    });
  }

  getCardHeader() {
    return new Promise<Device.CardHeader>((resolve, reject) => {
      fetch("/api/devices/card-header")
        .then(async (response) => await response.json())
        .then(resolve)
        .catch((error) => reject(error));
    });
  }
}

export default new DevicesService();
