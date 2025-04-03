import * as echarts from "echarts";
const Stats = ({ isLoading }) => {
  const charts = [
    { number: "15+", label: "Years Experience" },
    { number: "10,000+", label: "Satisfied Customers" },
    { number: "24/7", label: "Emergency Service" },
    { number: "100%", label: "Satisfaction Rate" },
  ];

  const initChart = () => {
    const chartElement = document.getElementById("satisfaction-chart");
    if (chartElement) {
      const chart = echarts.init(chartElement);
      const option = {
        animation: false,
        title: {
          text: "Customer Satisfaction Rate",
          left: "center",
          textStyle: {
            color: "#334155",
          },
        },
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            data: [
              { value: 95, name: "Satisfied" },
              { value: 5, name: "Others" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      chart.setOption(option);
    }
  };
  if (!isLoading) {
    initChart();
  }

  return (
    <section className="stats-section">
      <div className="section-container">
        <div className="stats-grid">
          {charts.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
