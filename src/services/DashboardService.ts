class DashboardService {
  getCardHeader() {
    return new Promise<Dashboard.CardHeader>((resolve, reject) => {
      fetch("/api/dashboard/card-header")
        .then(async (response) => await response.json())
        .then(resolve)
        .catch((error) => reject(error));
    });
  }
}

export default new DashboardService();
