import React, { useState, useEffect } from 'react';

export const calculatePoints = (amount) => {
    let points = 0;
    //80
    if (amount > 100) {
        points = amount - 100;
        points = points * 2;
        points = points + 50;
    } else if (amount > 50 && amount < 100) {
        points = amount - 50;
        points = points * 1;
    }
    return points;
}

const CustomerRewards = () => {
    const [transactions, setTransactions] = useState([]);
    const [pointsByMonth, setPointsByMonth] = useState({});
    const [totalPoints, setTotalPoints] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            // simulate an asynchronous API call to fetch data
            const data = [
                { customerId: 1, amount: 120, month: 1 },
                { customerId: 1, amount: 80, month: 2 },
                { customerId: 2, amount: 150, month: 1 },
                { customerId: 2, amount: 200, month: 2 },
                { customerId: 2, amount: 90, month: 3 },
                { customerId: 3, amount: 110, month: 1 },
                { customerId: 3, amount: 30, month: 2 },
                { customerId: 3, amount: 170, month: 3 },
            ];
            setTransactions(data);
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (transactions.length > 0) {
            const pointsByMonth = {};
            let totalPoints = 0;
            transactions.forEach(transaction => {
                const points = calculatePoints(transaction.amount);
                totalPoints += points;
                if (!pointsByMonth[transaction.month]) {
                    pointsByMonth[transaction.month] = 0;
                }
                pointsByMonth[transaction.month] += points;
            });
            setPointsByMonth(pointsByMonth);
            setTotalPoints(totalPoints);
        }
    }, [transactions]);

    return (
        <div>
            <h2>Customer Rewards</h2>
            <table>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Points Earned</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(pointsByMonth).map(month => (
                        <tr key={month}>
                            <td>{month}</td>
                            <td>{pointsByMonth[month]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>Total Points: {totalPoints}</div>
        </div>
    );
};

export default CustomerRewards;
