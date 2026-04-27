import { createServer } from "miragejs";

export default function makeServer() {
  return createServer({
    routes() {
      this.namespace = "api";

      const devices = [
        {
          device: {
            model: "IPhone 14 Pro",
            code: "Serial: 123 231 231",
            platform: "iOS 17.4",
          },
          user: {
            name: "Rafael Andrade",
            email: "rafael.andrade@empresa.com",
          },
          status: "ACTIVE",
          type: "SmartPhone",
          politics: "Padrão corporativo",
          monthlyCost: 196.8,
          lastUpdate: "26/04/2026 22:37",
        },
        {
          device: {
            model: "Samsung Galaxy S23",
            code: "Serial: 123 432 431",
            platform: "Android 14",
          },
          user: {
            name: "Bruce Wayne",
            email: "bruce.wayne@empresa.com",
          },
          status: "ACTIVE",
          type: "Notebook",
          politics: "Padrão corporativo",
          monthlyCost: 128.5,
          lastUpdate: "26/04/2026 22:37",
        },
        {
          device: {
            model: 'MacBook Pro 14"',
            code: "Serial: 123 231 231",
            platform: "macOS 14.3",
          },
          user: {
            name: "Dieni Kielermann",
            email: "dieni.kielermann@empresa.com",
          },
          status: "ACTIVE",
          type: "Notebook",
          politics: "Acesso Restrito",
          monthlyCost: 89.9,
          lastUpdate: "26/04/2026 22:37",
        },
        {
          device: {
            model: "iPad Air (5ª gen)",
            code: "Serial: 123 231 231",
            platform: "iOS 17.4",
          },
          user: {
            name: "Rayque Cuevas",
            email: "rayque.cuevas@empresa.com",
          },
          status: "BLOCKED",
          type: "Tablet",
          politics: "Padrão corporativo",
          monthlyCost: 0.0,
          lastUpdate: "26/04/2026 22:37",
        },
        {
          device: {
            model: "Samsung Galaxy A54",
            code: "Serial: 123 231 231",
            platform: "Android 14",
          },
          user: {
            name: "Rafaela Lopes",
            email: "rafaela.lopes@empresa.com",
          },
          status: "ACTIVE",
          type: "SmartPhone",
          politics: "Padrão corporativo",
          monthlyCost: 128.5,
          lastUpdate: "26/04/2026 22:37",
        },
        {
          device: {
            model: "Dell Latitude 5440",
            code: "Serial: 123 231 231",
            platform: "Windows 11",
          },
          user: {
            name: "Thiago Correa",
            email: "thiago.correa@empresa.com",
          },
          status: "DISABLED",
          type: "Notebook",
          politics: "Acesso Restrito",
          monthlyCost: 0.0,
          lastUpdate: "26/04/2026 22:37",
        },
        {
          device: {
            model: "Lenovo ThinkPad E14",
            code: "Serial: 123 231 231",
            platform: "Windows 10",
          },
          user: {
            name: "Camila Nascimento",
            email: "camila.nascimento@empresa.com",
          },
          status: "ACTIVE",
          type: "Notebook",
          politics: "Padrão corporativo",
          monthlyCost: 196.8,
          lastUpdate: "26/04/2026 22:37",
        },
        {
          device: {
            model: "IPhone 14 Pro",
            code: "Serial: 123 231 231",
            platform: "iOS 16.6",
          },
          user: {
            name: "Rafael Ribeiro",
            email: "rafael.ribeiro@empresa.com",
          },
          status: "ACTIVE",
          type: "SmartPhone",
          politics: "Padrão corporativo",
          monthlyCost: 89.9,
          lastUpdate: "26/04/2026 22:37",
        },
        {
          device: {
            model: "IPad Mini",
            code: "Serial: 123 231 231",
            platform: "iOS 17.4",
          },
          user: {
            name: "Juliete Poletti",
            email: "juliete.poletti@empresa.com",
          },
          status: "BLOCKED",
          type: "Tablet",
          politics: "Acesso Restrito",
          monthlyCost: 0.0,
          lastUpdate: "26/04/2026 22:37",
        },
      ];

      this.get("/dashboard/card-header", () => {
        return {
          totalDevices: {
            value: 1248,
            increase: "+8.2",
          },
          monthlyCost: {
            value: 178540,
            increase: "-3.7",
          },
          alertDevices: {
            value: 23,
            increase: "-15.0",
          },
          activeUsers: {
            value: 982,
            increase: "+5.4",
          },
        };
      });

      this.get("/devices/recent-list", () => {
        return devices.slice(0, 5);
      });

      this.get("/devices/list", () => {
        return devices;
      });

      this.get("/devices/card-header", () => {
        return {
          totalDevices: {
            value: 1248,
            increase: "+8.2",
          },
          active: {
            value: 982,
            increase: "+5.4",
          },
          blocked: {
            value: 38,
            increase: "-12.6",
          },
          disabled: {
            value: 228,
            increase: "-3.1",
          },
        };
      });

      this.get("/costs/by-category", () => {
        return [
          {
            type: "Voz",
            value: 82128.4,
            percent: 46,
          },
          {
            type: "Dados móveis",
            value: 55347.4,
            percent: 31,
          },
          {
            type: "SMS",
            value: 23210.2,
            percent: 13,
          },
          {
            type: "Outros",
            value: 17854,
            percent: 10,
          },
        ];
      });

      this.get("/costs/evolution-by-date", () => {
        return [
          {
            date: "22/06",
            value: 10000,
          },
          {
            date: "23/06",
            value: 20000,
          },
          {
            date: "24/06",
            value: 5000,
          },
          {
            date: "25/06",
            value: 7500,
          },
          {
            date: "26/06",
            value: 15000,
          },
          {
            date: "27/06",
            value: 30000,
          },
        ];
      });

      this.get("/costs/card-header", () => {
        return {
          allValue: {
            value: 178540,
            increase: "+8.2",
          },
          dailyAvg: {
            value: 8985.16,
            increase: "+3.7",
          },
          biggerCostDaily: {
            value: 12450.3,
            increase: "-15.0",
          },
          economy: {
            value: 18320.5,
            increase: "+5.4",
          },
        };
      });

      this.get("/costs/biggest-costs-by-user", () => {
        return [
          {
            name: "Rafael Andrade",
            value: 1245.8,
          },
          {
            name: "Bruce Wayne",
            value: 1120.4,
          },
          {
            name: "Dieni Kielermann",
            value: 987.3,
          },
          {
            name: "Rayque Cuevas",
            value: 865.2,
          },
          {
            name: "Rafaela Lopes",
            value: 754.1,
          },
        ];
      });

      this.get("/costs/list", () => {
        return [
          {
            department: "Comercial",
            category: "Voz",
            value: 56420.3,
            icon: {
              color: "var(--color-primary)",
              icon: "call",
            },
            percent: "20.9%",
            variant: "+5.6%",
          },
          {
            department: "Tecnologia",
            category: "Dados móveis",
            value: 54870.4,
            icon: {
              color: "var(--color-feedback-success)",
              icon: "wifi",
            },
            percent: "19.7%",
            variant: "-2.1%",
          },
          {
            department: "Operações",
            category: "Dispositivos",
            value: 42310.2,
            icon: {
              color: "var(--color-secondary)",
              icon: "mobile_2",
            },
            percent: "15.2%",
            variant: "+8.4%",
          },
          {
            department: "Administrativo",
            category: "Voz",
            value: 37650.1,
            icon: {
              color: "var(--color-primary)",
              icon: "call",
            },
            percent: "13.5%",
            variant: "-1.3%",
          },
          {
            department: "Marketing",
            category: "Dados móveis",
            value: 32120.5,
            icon: {
              color: "var(--color-feedback-success)",
              icon: "wifi",
            },
            percent: "11.5%",
            variant: "-3.8%",
          },
          {
            department: "Financeiro",
            category: "SMS",
            value: 12340.0,
            icon: {
              color: "var(--color-feedback-warning)",
              icon: "call",
            },
            percent: "4.4%",
            variant: "+6.7%",
          },
        ];
      });
    },
  });
}
