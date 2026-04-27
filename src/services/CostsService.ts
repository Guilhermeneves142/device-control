class CostsService {
  getDataByCategory() {
    return new Promise<Costs.ByCategory[]>((resolve, reject) => {
      fetch("/api/costs/by-category")
        .then(async (response) => await response.json())
        .then(resolve)
        .catch((error) => reject(error));
    });
  }

  getEvolutionByDate() {
    return new Promise<Costs.EvolutionByDate[]>((resolve, reject) => {
      fetch("/api/costs/evolution-by-date")
        .then(async (response) => await response.json())
        .then(resolve)
        .catch((error) => reject(error));
    });
  }

  getCardHeader() {
    return new Promise<Costs.CardHeader>((resolve, reject) => {
      fetch("/api/costs/card-header")
        .then(async (response) => await response.json())
        .then(resolve)
        .catch((error) => reject(error));
    });
  }

  getBiggestCostsByUser() {
    return new Promise<Costs.BiggestCostsByUser[]>((resolve, reject) => {
      fetch("/api/costs/biggest-costs-by-user")
        .then(async (response) => await response.json())
        .then(resolve)
        .catch((error) => reject(error));
    });
  }

  getAll() {
    return new Promise<Costs.List[]>((resolve, reject) => {
      fetch("/api/costs/list")
        .then(async (response) => await response.json())
        .then(resolve)
        .catch((error) => reject(error));
    });
  }
}

export default new CostsService();
