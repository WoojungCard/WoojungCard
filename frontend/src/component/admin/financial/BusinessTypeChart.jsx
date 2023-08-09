import { ResponsiveBar } from "@nivo/bar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminBusinessTypeData } from "../../../store/admin/adminSlice";
import moment from "moment";

// 업종별 카드소비현황
function BusinessTypeChart(props) {

    const dispatch = useDispatch();

    const {businessTypeData} = useSelector((state) => state.admin);

    const [rawData, setRawData]     = useState([]);
    const [chartData, setChartData] = useState([]);

    const now      = moment(new Date()).format('yyyy');
    const lastYear = `${now-1}`;
    const thisYear = `${now}`;

    const selectedMonth = props.selectedMonth;
    const lastYearMonth = props.lastYearMonth;

    const paymentData = ({
        "paymentMonth" : selectedMonth,
        "paymentMonthLastYear" : lastYearMonth
    });

    useEffect(() => {dispatch(adminBusinessTypeData(paymentData))}, [selectedMonth]);
    useEffect(() => {setRawData(businessTypeData)}                , [businessTypeData]);
    useEffect(() => {const transformData = (rawData) => {const transformedData = {};
                                                         for (const data of rawData) {const {businessType, totalCharge, paymentMonth} = data;
                                                                                      if (!transformedData[businessType]) {transformedData[businessType] = {[lastYear]: null,[thisYear]: null};}
                                                                                      if (paymentMonth.includes(now))     {transformedData[businessType].thisYear = totalCharge;} 
                                                                                      else                                {transformedData[businessType].lastYear = totalCharge;}}
                                                         return Object.keys(transformedData).map((businessType) => ({businessType, 
                                                                                                                    [lastYear]: transformedData[businessType].lastYear,
                                                                                                                    [thisYear]: transformedData[businessType].thisYear,}));};
                     const transformedData = transformData(rawData);
                     setChartData(transformedData);}              , [rawData]);

    return (
        <div style={{ width: '1000px', height: '350px', margin: '0 auto' }}>
            <ResponsiveBar
                data={chartData}
                keys={[
                    [lastYear],
                    [thisYear]
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