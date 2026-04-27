export {};
declare global {
  namespace Costs {
    type ByCategory = {
      type: string;
      value: number;
      percent: number;
    };

    type EvolutionByDate = {
      date: string;
      value: number;
    };

    type Metric = {
      value: number;
      increase: string;
    };

    type CardHeader = {
      allValue: Metric;
      dailyAvg: Metric;
      biggerCostDaily: Metric;
      economy: Metric;
    };

    type BiggestCostsByUser = {
      name: string;
      value: number;
    };

    type List = {
      department: string;
      category: string;
      value: number;
      icon: {
        color: string;
        icon: string;
      };
      percent: string;
      variant: string;
    };
  }
}
