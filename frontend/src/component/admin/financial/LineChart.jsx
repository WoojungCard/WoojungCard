import * as React from 'react';
import { ResponsiveLine } from '@nivo/line';

function LineChart() {
    const data = [
        {
          "id": "2023",
          "color": "hsl(293, 70%, 50%)",
          "data": [
            {
              "x": "7월1일",
              "y": 239
            },
            {
              "x": "7월2일",
              "y": 102
            },
            {
              "x": "7월3일",
              "y": 188
            },
            {
              "x": "7월4일",
              "y": 147
            },
            {
              "x": "7월5일",
              "y": 30
            },
            {
              "x": "7월6일",
              "y": 193
            },
            {
              "x": "7월7일",
              "y": 237
            },
            {
              "x": "7월8일",
              "y": 17
            },
            {
              "x": "7월9일",
              "y": 290
            },
            {
              "x": "7월10일",
              "y": 206
            },
            {
              "x": "7월11일",
              "y": 264
            },
            {
              "x": "7월12일",
              "y": 142
            },
            {
              "x": "7월13일",
              "y": 108
            },
            {
              "x": "7월14일",
              "y": 108
            },
            {
              "x": "7월15일",
              "y": 108
            },
            {
              "x": "7월16일",
              "y": 108
            },
            {
              "x": "7월17일",
              "y": 108
            },
            {
              "x": "7월18일",
              "y": 108
            },
            {
              "x": "7월19일",
              "y": 108
            },
            {
              "x": "7월20일",
              "y": 108
            },
            {
              "x": "7월21일",
              "y": 108
            },
            {
              "x": "7월22일",
              "y": 108
            },
            {
              "x": "7월23일",
              "y": 108
            },
            {
              "x": "7월24일",
              "y": 108
            },
            {
              "x": "7월25일",
              "y": 108
            },
            {
              "x": "7월26일",
              "y": 108
            },
            {
              "x": "7월27일",
              "y": 108
            },
            {
              "x": "7월28일",
              "y": 108
            },
            {
              "x": "7월29일",
              "y": 108
            },
            {
              "x": "7월30일",
              "y": 108
            }
          ]
        },
        
        {
          "id": "2022",
          "color": "hsl(280, 70%, 50%)",
          "data": [
            {
              "x": "7월1일",
              "y": 292
            },
            {
              "x": "7월2일",
              "y": 244
            },
            {
              "x": "7월3일",
              "y": 141
            },
            {
              "x": "7월4일",
              "y": 48
            },
            {
              "x": "7월5일",
              "y": 55
            },
            {
              "x": "7월6일",
              "y": 299
            },
            {
              "x": "7월7일",
              "y": 107
            },
            {
              "x": "7월8일",
              "y": 46
            },
            {
              "x": "7월9일",
              "y": 124
            },
            {
              "x": "7월10일",
              "y": 55
            },
            {
              "x": "7월11일",
              "y": 77
            },
            {
              "x": "7월12일",
              "y": 108
            },
            {
              "x": "7월13일",
              "y": 108
            },
            {
              "x": "7월14일",
              "y": 108
            },
            {
              "x": "7월15일",
              "y": 108
            },
            {
              "x": "7월16일",
              "y": 108
            },
            {
              "x": "7월17일",
              "y": 108
            },
            {
              "x": "7월18일",
              "y": 108
            },
            {
              "x": "7월19일",
              "y": 108
            },
            {
              "x": "7월20일",
              "y": 108
            },
            {
              "x": "7월21일",
              "y": 108
            },
            {
              "x": "7월22일",
              "y": 108
            },
            {
              "x": "7월23일",
              "y": 108
            },
            {
              "x": "7월24일",
              "y": 108
            },
            {
              "x": "7월25일",
              "y": 108
            },
            {
              "x": "7월26일",
              "y": 108
            },
            {
              "x": "7월27일",
              "y": 108
            },
            {
              "x": "7월28일",
              "y": 108
            },
            {
              "x": "7월29일",
              "y": 108
            },
            {
              "x": "7월30일",
              "y": 108
            }
          ]
        }
      ];
      
    return (
        <div style={{ width: '1200px', height: '300px', margin: '0 auto' }}>
            <ResponsiveLine
                data={data}
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
                        translateY: -20,
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