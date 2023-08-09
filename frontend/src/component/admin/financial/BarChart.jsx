import * as React from 'react';
import { ResponsiveBar, Bar, BarTooltip } from '@nivo/bar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { adminGenderAgeData } from '../../../store/admin/adminSlice';
import { useState } from 'react';

// 성/연령별 소비현황
const BarChart = (props) => {

    const dispatch = useDispatch();
    const {genderAgeData} = useSelector((state) => state.admin);
    const [data, setData] = useState([]);
    const [chartData, setChartData] = useState([]);

    const selectedMonth = props.selectedMonth;
    const lastYearMonth = props.lastYearMonth;

    const paymentData = ({
        "paymentMonth" : selectedMonth,
        "paymentMonthLastYear" : lastYearMonth
    });


    useEffect(() => {
        dispatch(adminGenderAgeData(paymentData));
    }, [selectedMonth]);

    useEffect(() => {
        setData(genderAgeData);
    }, [genderAgeData]);

    useEffect(() => {
        // 그래프에 적용하기 위한 데이터 형식으로 변환
        const transformData = (data) => {
            const maleCharges = {};
            const femaleCharges = {};
        
            data.forEach((data) => {
                const ageGroup = data.ageGroup;
                const totalCharge = data.totalCharge;
            
                if (data.userGender === 'MAN') {
                    maleCharges[ageGroup] = (maleCharges[ageGroup] || 0) + totalCharge;
                } else if (data.userGender === 'WOMAN') {
                    femaleCharges[ageGroup] = (femaleCharges[ageGroup] || 0) + totalCharge;
                }
            });
            
            const transformedData = Object.keys(maleCharges).map((age) => ({
                age: age,
                Males: -maleCharges[age],
                Females: femaleCharges[age] || 0
            }));
        
            transformedData.sort((a, b) => parseInt(b.age, 10) - parseInt(a.age, 10));  // 연령대 기준 내림차순

            return transformedData;            
        };

        const newChartData = transformData(genderAgeData);
        setChartData(newChartData);
    }, [data]);
    
    return (
        <div className='position-relative' 
             style={{ width: '600px', height: '350px', margin: '0 auto' }}>

            <div className='position-absolute fw-bold text-white'
                 style={{zIndex: 1, left: '270px', top: '65px', textShadow: '2px 2px black'}}>
                <p className='mb-3 pb-1'>20대</p>
                <p className='mb-3'>30대</p>
                <p className='mb-3 pb-1'>40대</p>
                <p className='mb-3 pb-1'>50대</p>
                <p className='mb-3 pb-1'>60대</p>
                <p className=''>70대</p>
            </div>

            <ResponsiveBar
                layout='horizontal'
                valueFormat={Math.abs}
                enableGridY={false}
                ticks={{display: 'block'}}
                data={chartData}
                keys={['Males', 'Females']}
                indexBy="age"
                margin={{ top: 50, right: 100, bottom: 30, left: 60 }}
                padding={0.2}
                minValue={-10000000}
                maxValue={10000000}
                colors={{ scheme: 'category10' }}
                colorBy="id"
                theme={{
                    labels: {
                        text: {
                            fontSize: 14,
                            fill: '#000000',
                            display: 'none'
                        },
                    },
                    legends: {
                        text: {
                            fontSize: 12,
                            fill: '#000000',
                        },
                    },
                    axis: {
                        legend: {
                            text: {
                                fontSize: 20,
                                fill: '#000000',
                            },
                        },
                        ticks: {
                            text: {
                                fontSize: 16,
                                fill: '#000000',
                            },
                        },
                    },
                }}
                axisBottom={null}
                axisLeft={null}
                labelSkipWidth={36}
                labelSkipHeight={12}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'top-right',
                        direction: 'row',
                        justify: false,
                        translateX: 120,
                        translateY: -20,
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
                                    itemOpacity: 1,
                                },
                            },
                        ],
                    },
                ]}
            />
        </div>
    );
};

export default BarChart;
