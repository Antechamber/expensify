import moment from 'moment'

export default [
    {
        id: '1',
        description: 'Allergy meds',
        note: 'Too expensive',
        amount: 3000,
        createdAt: moment(0).add(4, 'days').valueOf()
    },
    {
        id: '2',
        description: 'Gas',
        note: 'Also too expensive',
        amount: 9000,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '3',
        description: 'Flour',
        note: "Makin' that bread",
        amount: 799,
        createdAt: 0
    }
]