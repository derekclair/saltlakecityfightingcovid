import React, { useEffect, useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import { Grow } from '@material-ui/core';

// Generate Sales Data
function createData(time, amount) {
    return { time, amount };
}

export default function Chart() {
    const theme = useTheme();
    const [testedData, setTestedData] = useState([])
    const [testedPositiveData, setTestedPositiveData] = useState([])
    const [hospitalized, setHospitalized] = useState([])
    const [deaths, setDeaths] = useState([])
    const [recovered, setRecovered] = useState([])
    useEffect(() => {
        const fetchTrackingData = async () => {
            const data = await fetch('https://covidtracking.com/api/v1/states/daily.json').then(response => response.json())
            const utah = data.filter(({ state }) => state === 'UT').sort((a, b) => a.date - b.date);
            const newTestedData = [];
            const newTestedPositiveData = [];
            const newHospitalized = [];
            const newDeaths = [];
            const newRecovered = [];
            utah.forEach(day => {
                let dateFormatted = day.date.toString();
                dateFormatted = dateFormatted[5] + '/' + dateFormatted[6] + dateFormatted[7]
                newTestedData.push(createData(dateFormatted, day.total))
                newTestedPositiveData.push(createData(dateFormatted, day.positive))
                newHospitalized.push(createData(dateFormatted, day.hospitalized))
                newDeaths.push(createData(dateFormatted, day.death))
                newRecovered.push(createData(dateFormatted, day.recovered))
            });
            setTestedData(newTestedData)
            setTestedPositiveData(newTestedPositiveData)
            setHospitalized(newHospitalized)
            setDeaths(newDeaths)
            setRecovered(newRecovered)
        }
        fetchTrackingData();
    }, [])

    return (
        <React.Fragment>
            <Title>Utah COVID by the numbers</Title>
            <ResponsiveContainer>
                <Grow in={testedData.length}>
                    <LineChart
                        data={testedData}
                        margin={{
                            top: 16,
                            right: 16,
                            bottom: 0,
                            left: 24,
                        }}
                    >
                        <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
                        <YAxis stroke={theme.palette.text.secondary}>
                            <Label
                                angle={270}
                                position="left"
                                style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
                            >
                                Tested
            </Label>
                        </YAxis>
                        <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
                    </LineChart>
                </Grow>
            </ResponsiveContainer>
            <ResponsiveContainer>
                <Grow in={testedPositiveData.length}>
                    <LineChart
                        data={testedPositiveData}
                        margin={{
                            top: 16,
                            right: 16,
                            bottom: 0,
                            left: 24,
                        }}
                    >
                        <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
                        <YAxis stroke={theme.palette.text.secondary}>
                            <Label
                                angle={270}
                                position="left"
                                style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
                            >
                                Tested Positive
            </Label>
                        </YAxis>
                        <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
                    </LineChart>
                </Grow>
            </ResponsiveContainer>
            <ResponsiveContainer>
                <Grow in={hospitalized.length}>
                    <LineChart
                        data={hospitalized}
                        margin={{
                            top: 16,
                            right: 16,
                            bottom: 0,
                            left: 24,
                        }}
                    >
                        <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
                        <YAxis stroke={theme.palette.text.secondary}>
                            <Label
                                angle={270}
                                position="left"
                                style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
                            >
                                Hospitalized
            </Label>
                        </YAxis>
                        <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
                    </LineChart>
                </Grow>
            </ResponsiveContainer>
            <ResponsiveContainer>
                <Grow in={deaths.length}>
                    <LineChart
                        data={deaths}
                        margin={{
                            top: 16,
                            right: 16,
                            bottom: 0,
                            left: 24,
                        }}
                    >
                        <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
                        <YAxis stroke={theme.palette.text.secondary}>
                            <Label
                                angle={270}
                                position="left"
                                style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
                            >
                                Deaths
            </Label>
                        </YAxis>
                        <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
                    </LineChart>
                </Grow>
            </ResponsiveContainer>
            <ResponsiveContainer>
                <Grow in={recovered.length}>
                    <LineChart
                        data={recovered}
                        margin={{
                            top: 16,
                            right: 16,
                            bottom: 0,
                            left: 24,
                        }}
                    >
                        <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
                        <YAxis stroke={theme.palette.text.secondary}>
                            <Label
                                angle={270}
                                position="left"
                                style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
                            >
                                Recovered
            </Label>
                        </YAxis>
                        <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
                    </LineChart>
                </Grow>
            </ResponsiveContainer>
        </React.Fragment>
    );
}