

const student=[
    {
        "rollno":65253,
        "name":"devansh",
        "city":"bhopal"
    },
    {
        "rollno":84849,
        "name":"aman",
        "city":"delhi"
    },
    {
        "rollno":84965,
        "name":"john",
        "city":"kota"
    },
    {
        "rollno":35565,
        "name":"anjali",
        "city":"kolar"
    },
    {
        "rollno":93595,
        "name":"ayush",
        "city":"kolkata"
    },
]

const ans=student.map((key)=>{
    return(
        <>
        <tr>
            <td>{key.rollno}</td>
            <td>{key.name}</td>
            <td>{key.city}</td>
        </tr>
        </>
    )
})

const Object=()=>{
    return(
        <>
        <table border="5px" width="500px" align="center">
            <tr>
                <th>roolno</th>
                <th>name</th>
                <th>city</th>
            </tr>
        {ans}
        </table>
        </>
    )
}

export default Object;