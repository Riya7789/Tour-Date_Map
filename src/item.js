const student=[{
    id: 0,
    name: 'Prashana Shrestha',
    profession: 'Student',
    },
    {
        id: 1,
        name: 'Saroj Adhikari',
        profession: 'Student',
    },
    {
        is: 2,
        name: 'Riya Shrestha',
        profession: 'Student',
    }];
    

export default function Std(){
    const listItems = student.map(student =>
        <li>{student}</li>
        );
        return <ul>{listItems}</ul>
}