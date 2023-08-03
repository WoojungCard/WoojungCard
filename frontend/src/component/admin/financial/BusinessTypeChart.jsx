import { ResponsiveBar } from "@nivo/bar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminBusinessTypeData } from "../../../store/admin/adminSlice";

function BusinessTypeChart(props) {
  
  const dispatch = useDispatch();
  const {businessTypeData} = useSelector((state) => state.admin);
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState([]);

  const selectedMonth = props.selectedMonth;
  const lastYearMonth = props.lastYearMonth;

  const paymentData = ({
    "paymentMonth" : selectedMonth,
    "paymentMonthLastYear" : lastYearMonth
  });

  useEffect(() => {
    dispatch(adminBusinessTypeData(paymentData));
  }, [selectedMonth]);

  useEffect(() => {
    setData(businessTypeData);
  }, [businessTypeData]);

  useEffect(() => {
    console.log(data);

    // const transformData = (data) => {
    //   // const transformedData = [];
    //   const lastYearCharges = {};
    //   const thisYearCharges = {};

    //   data.forEach((data) => {
    //     const 
    //     if (data.paymentMonth.include('2022')) {

    //     }
    //   })
  
    // return transformedData;
    // }

    // const newChartData = transformData(businessTypeData);
    // setChartData(newChartData);
    // console.log(chartData);
  }, [data]);

    return (
        <div style={{ width: '1000px', height: '350px', margin: '0 auto' }}>
            <ResponsiveBar
                data={chartData}
                keys={[
                    'lastYear',
                    'thisYear'
                ]}
                indexBy="businessType"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                groupMode="grouped"
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'accent' }}
                
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                
                theme={{
                    legends: {
                        text: {
                            fontSize: 12,
                            fill: '#000000',
                        },
                    },
                    axis: {
                        ticks: {
                            text: {
                                fontSize: 14,
                                fill: '#000000',
                            },
                        },
                    },
                }}

                axisTop={{
                    tickSize: 0,
                    tickPadding: 10,
                    tickRotation: 0,
                    legend: '',
                    legendOffset: 36
                }}
                axisRight={null}
                axisBottom={null}
                axisLeft={null}
                enableGridY={false}
                enableLabel={false}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'top-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
            />
        </div>
    );
}

export default BusinessTypeChart;