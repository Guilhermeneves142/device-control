export {};
declare global {
  namespace Device {
    type Device = {
      device: {
        model: string;
        code: string;
        platform: string;
      };
      user: {
        name: string;
        email: string;
      };
      status: "ACTIVE" | "BLOCKED" | "DISABLED";
      type: string;
      politics: string;
      monthlyCost: number;
      lastUpdate: string;
    };

    type Metric = {
      value: number;
      increase: string;
    };

    type CardHeader = {
      totalDevices: Metric;
      active: Metric;
      blocked: Metric;
      disabled: Metric;
    };
  }
}
