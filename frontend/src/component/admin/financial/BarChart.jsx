import * as React from 'react';
import { ResponsiveBar, Bar, BarTooltip } from '@nivo/bar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { adminGenderAgeData } from '../../../store/admin/adminSlice';
import { useState } from 'react';
import { useCallback } from 'react';

const BarChart = (props) => {


    const dispatch = useDispatch();
    const {genderAgeData} = useSelector((state) => state.admin);
    const [data, setData] = useState([]);
    const [chartData, setChartData] = useState([]);

    const selectedMonth = props.selectedMonth;
    const lastYearMonth = props.lastYearMonth;
    // console.log(selectedMonth);

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
        // console.log(data);

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
            
            const transformedData = Object.keys(maleCharges).map((age) => {
                return {
                    age: age,
                    Males: -maleCharges[age],
                    Females: femaleCharges[age] || 0
                };
            });
        
            transformedData.sort((a, b) => {
                const ageA = parseInt(a.age, 10);
                const ageB = parseInt(b.age, 10);
                return ageB - ageA;
            });
            
            return transformedData;
            
        };

        const newChartData = transformData(genderAgeData);
        setChartData(newChartData);
        
    }, [data]);
    
    // const handle = {
    //     barClick: (data) => {
            // console.log(data);
        // },

        // legendClick: (data) => {
            // console.log(data);
    //     },
    // };

    return (
        // chart height이 100%이기 때문이 chart를 덮는 마크업 요소에 height 설정
        <div className='position-relative' 
             style={{ width: '600px', height: '350px', margin: '0 auto' }}>

            {/* y축 값 위치 조정 */}
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
                /**
                 * chart에 사용될 데이터
                 */
                data={chartData}
                /**
                 * chart에 보여질 데이터 key (측정되는 값)
                 */
                keys={['Males', 'Females']}
                /**
                 * keys들을 그룹화하는 index key (분류하는 값)
                 */
                indexBy="age"
                /**
                 * chart margin
                 */
                margin={{ top: 50, right: 100, bottom: 30, left: 60 }}
                /**
                 * chart padding (bar간 간격)
                 */
                padding={0.2}

                minValue={-10000000}

                maxValue={10000000}
                /**
                 * chart 색상
                 */
                // colors={['olive', 'brown', 'orange']} // 커스텀하여 사용할 때
                colors={{ scheme: 'category10' }}
                /**
                 * color 적용 방식
                 */
                colorBy="id" // 색상을 keys 요소들에 각각 적용
                // colorBy="indexValue" // indexBy로 묵인 인덱스별로 각각 적용
                theme={{
                    /**
                     * label style (bar에 표현되는 글씨)
                     */
                    labels: {
                        text: {
                            fontSize: 14,
                            fill: '#000000',
                            display: 'none'
                        },
                    },
                    /**
                     * legend style (default로 우측 하단에 있는 색상별 key 표시)
                     */
                    legends: {
                        text: {
                            fontSize: 12,
                            fill: '#000000',
                        },
                    },
                    axis: {
                        /**
                         * axis legend style (bottom, left에 있는 글씨)
                         */
                        legend: {
                            text: {
                                fontSize: 20,
                                fill: '#000000',
                            },
                        },
                        /**
                         * axis ticks style (bottom, left에 있는 값)
                         */
                        ticks: {
                            text: {
                                fontSize: 16,
                                fill: '#000000',
                            },
                        },
                    },
                }}
                /**
                 * axis bottom 설정
                 */
                axisBottom={null}
                /**
                 * axis left 설정
                 */
                // axisLeft={{
                    // tickSize: 0, // 값 설명하기 위해 튀어나오는 점 크기
                    // tickPadding: 10, // tick padding
                    // tickRotation: 0, // tick 기울기
                    // legend: 'price', // left 글씨
                    // legendPosition: 'middle', // 글씨 위치
                    // legendOffset: 60, // 글씨와 chart간 간격
                // }}
                axisLeft={null}
                /**
                 * label 안보이게 할 기준 width
                 */
                labelSkipWidth={36}
                /**
                 * label 안보이게 할 기준 height
                 */
                labelSkipHeight={12}
                /**
                 * bar 클릭 이벤트
                 */
                // onClick={handle.barClick}
                /**
                 * legend 설정 (default로 우측 하단에 있는 색상별 key 표시)
                 */
                legends={[
                    {
                        dataFrom: 'keys', // 보일 데이터 형태
                        anchor: 'top-right', // 위치
                        direction: 'row', // item 그려지는 방향
                        justify: false, // 글씨, 색상간 간격 justify 적용 여부
                        translateX: 120, // chart와 X 간격
                        translateY: -20, // chart와 Y 간격
                        itemsSpacing: 2, // item간 간격
                        itemWidth: 100, // item width
                        itemHeight: 20, // item height
                        itemDirection: 'left-to-right', // item 내부에 그려지는 방향
                        itemOpacity: 0.85, // item opacity
                        symbolSize: 20, // symbol (색상 표기) 크기
                        effects: [
                            {
                                // 추가 효과 설정 (hover하면 item opacity 1로 변경)
                                on: 'hover',
                                style: {
                                    itemOpacity: 1,
                                },
                            },
                        ],
                        // onClick: handle.legendClick, // legend 클릭 이벤트
                    },
                ]}
            />
        </div>
    );
};

export default BarChart;
