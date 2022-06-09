import React from 'react'
import './CustomerReviews.css'
import Chart from 'react-apexcharts'

function CustomerReviews() {
    const series = [
        {
            name: "Review",
            data: [10, 50, 30, 60, 90, 93, 100]
        }
    ];

    const seriesToBuckets = (seriesData) => {
        let low = [];
        let med = [];
        let high = [];
        seriesData.forEach(review => {
            if (review < 50) {
                low.push(review);
            } else if (review >= 50 && review < 90) {
                med.push(review);
            } else {
                high.push(review)
            }
        })
        return [low.length, med.length, high.length]
    }

    const barChartSeries = [
        {
            name: "Number of Reviews",
            data: seriesToBuckets(series[0].data),
        }
    ];

    const options = {
        chart: {
            type: "area",
            height: "auto",
        },
        fill: {
            colors: ["#fff"],
            type: "gradient",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            colors: ["#ff929f"]
        },
        tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
        },
        grid: {
            show: false,
        },
        xaxis: {
            type: "datetime",
            categories: [
              "2018-09-19T11:00:00.000Z",
              "2018-09-19T15:30:00.000Z",
              "2018-09-19T17:30:00.000Z",
              "2018-09-19T20:30:00.000Z",
              "2018-09-20T02:30:00.000Z",
              "2018-09-20T05:30:00.000Z",
              "2018-09-20T10:30:00.000Z",
            ],
        },
       
        toolbar:{
            show: false
        }
    };

    
   
    const barChartOptions = {
        chart: {
            type: "bar"
        },
        plotOptions: {
            bar: {
                horizontal: false
            }
        },
        xaxis: {
            position: "bottom",
            labels: {
                offsetY: 0
            },
            categories: [
              "<50 Score",
              "50-89 Score",
              "90+ Score",
            ],
        },
        yaxis: {
            show: false
        },
        toolbar:{
            show: false
        }
    }

  return (
    <div className='customer-reviews'>
        <h2>Customer Reviews</h2>
        <h3>Review Scores in the past 24 hours</h3>
        <Chart 
        type="area"
        series={series} 
        options={options}
        />
        <h3>Review Score types in the past 24 hours</h3>
        <Chart 
        type="bar"
        series={barChartSeries} 
        options={barChartOptions}
        />
    </div>
  )
}

export default CustomerReviews