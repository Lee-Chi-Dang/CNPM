import React from 'react';
import MaterialTable from 'material-table';

export const Table=()=>{
    const data = [
  {
    id: 1,                                                                                              
    Name: 'Lê Chí Đăng',
    DOB: '26/08/2000',
    Sex: 'Nam',
    Phone: '0332859578',
    Email: 'chidang2608@gmail.com',
    STK:"36646384378"

  },
  {
    id: 2,
    Name: 'Lê Chí Đăng',
    DOB: '26/08/2000',
    Sex: 'Nam',
    Phone: '0332859578',
    Email: 'chidang2608@gmail.com',
    STK:"36646384378"
  },
  {
    id: 3,
    Name: 'Lê Chí Đăng',
    DOB: '26/08/2000',
    Sex: 'Nam',
    Phone: '0332859578',
    Email: 'chidang2608@gmail.com',
    STK:"36646384378"
  },
  {
    id: 4,
    Name: 'Lê Chí Đăng',
    DOB: '26/08/2000',
    Sex: 'Nam',
    Phone: '0332859578',
    Email: 'chidang2608@gmail.com',
    STK:"36646384378"
  },
  {
    id: 5,
    Name: 'Lê Chí Đăng',
    DOB: '26/08/2000',
    Sex: 'Nam',
    Phone: '0332859578',
    Email: 'chidang2608@gmail.com',
    STK:"36646384378"
  },
];
    const Columns =[
        {title: 'Name', filed : 'name' },
        {title: 'DOB', filed : 'dob' },
        {title: 'Sex', filed : 'sex' },
        {title: 'Phone', filed : 'phone' },
        {title: 'Email', filed : 'email' },
        {title: 'STK', filed : 'stk' }

    ]
    return(
        <div>
            <MaterialTable
            title = 'Danh sách học viên'
            data = {data}
            columns = {Columns}
            />
        </div>
    )  
}



