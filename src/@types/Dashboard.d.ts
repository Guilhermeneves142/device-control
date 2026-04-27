export {};
declare global {
  namespace Dashboard {
    type Metric = {
      value: number;
      increase: string;
    };

    type CardHeader = {
      totalDevices: Metric;
      monthlyCost: Metric;
      alertDevices: Metric;
      activeUsers: Metric;
    };
  }
}
