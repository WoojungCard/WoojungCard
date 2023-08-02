import { ResponsiveBar } from "@nivo/bar";

function BusinessTypeChart() {

    const data = [
        {
          "businessType": "가전/가구",
          "lastYear": 94,
          "thisYear": 198
        },
        {
          "businessType": "가정/서..",
          "lastYear": 125,
          "thisYear": 49
        },
        {
          "businessType": "교육/학원",
          "lastYear": 87,
          "thisYear": 0
        },
        {
          "businessType": "문화/레저",
          "lastYear": 200,
          "thisYear": 128
        },
        {
          "businessType": "미용",
          "lastYear": 111,
          "thisYear": 4
        },
        {
          "businessType": "여행/교통",
          "lastYear": 38,
          "thisYear": 78
        },
        {
          "businessType": "요식/유흥",
          "lastYear": 85,
          "thisYear": 33
        },
        {
          "businessType": "유통",
          "lastYear": 85,
          "thisYear": 33
        },
        {
          "businessType": "음/식료품",
          "lastYear": 85,
          "thisYear": 33
        },
        {
          "businessType": "의료",
          "lastYear": 85,
          "thisYear": 33
        },
        {
          "businessType": "자동차",
          "lastYear": 85,
          "thisYear": 33
        },
        {
          "businessType": "주유",
          "lastYear": 85,
          "thisYear": 33
        },
        {
          "businessType": "패션/잡화",
          "lastYear": 85,
          "thisYear": 33
        }
      ];


    return (
        <div style={{ width: '1000px', height: '350px', margin: '0 auto' }}>
            <ResponsiveBar
                data={data}
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
                axisBottom={{
                    tickSize: 0,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
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
                        anchor: 'bottom-right',
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