import * as React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { adminDailyData } from '../../../store/admin/adminSlice';

// 일별 카드소비 동향
function LineChart() {

    const dispatch = useDispatch();

    const {dailyData} = useSelector((state) => state.admin);
    const [rawData, setRawData]     = useState([]);
    const [chartData, setChartData] = useState([]);

    useEffect(() => {dispatch(adminDailyData());}   , []);
    useEffect(() => {setRawData(dailyData);}        , [dailyData]);
    useEffect(() => {const transformData = (rawData) => {const transformedData = {};
                                                         for (const data of rawData) {const { totalCharge, paymentDate } = data;
                                                                                      const [year, month, day] = paymentDate.split('-');
                                                                                      if (!transformedData[year]) {transformedData[year] = {id: year, data: [],};}
                                                        
                                                                                      transformedData[year].data.push({x: `${Number(month)}월${Number(day)}일`,
                                                                                                                       y: totalCharge,});}
                                                         return Object.values(transformedData);};
                     const transformedData = transformData(rawData);
                     setChartData(transformedData);}, [rawData]);
    
    return (
        <div style={{ width: '1200px', height: '300px', margin: '0 auto' }}>
            <ResponsiveLine
                data={chartData}
                margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 0,
                    tickPadding: 5,
                    tickRotation: -80,
                    // legend: 'transportation',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={null}
                enableGridX={false}
                enableGridY={false}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'top-right',
                        direction: 'row',
                        justify: false,
                        translateX: 40,
                        translateY: -40,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    );
}

export default LineChart;