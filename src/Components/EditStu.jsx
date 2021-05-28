import React from 'react';
import { v4 as uuidv4 } from "uuid";
import "./Edit.css";
import {Table} from './Table'

class EditStu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Name:"",
            DOB:"",
            Sex:"",
            Phone:"",
            Email:"",
            STK:"",
            list: [
                {id : uuidv4 , title : "" , Sex: "Male" },
                {id : uuidv4 , title : "" , Sex: "Female"},
            ],
        };
        this.onChangeText = this.onChangeText.bind(this)
    }
    onChangeText(event) {
    this.setState({ [event.target.name] : event.target.value });
  }
    handleDeleteText() {
        const result = window.confirm("Are you sure to delete this task ?");
    }
    render() {
        const {list} = this.state;
        const item = { id: uuidv4(), title: "", sex: "male" };
        return(
            <div style={{display: 'inline-flex'}}>
                <div className = "background">
                    <h1 style={{marginLeft: 65}} >Thông tin học viên</h1>
                    <div className = "infor">
                        <h3 className ="word"> Họ Tên </h3>
                        <input
                            name='Name'
                            className = "form1"
                            type ="text"
                            value ={this.state.Name}
                            onChange={this.onChangeText}
                        />
                    </div>
                    <div className = "infor">
                        <h3 className ="word"> Ngày sinh </h3>
                        <input
                            name='DOB'
                            className = "form1"
                            type ="text"
                            value ={this.state.DOB}
                            onChange={this.onChangeText}
                        />
                    </div>
                    <div className = "infor">
                        <h3 className ="word">Giới tính</h3>
                        <input
                            name='Sex'
                            className = "form1"
                            type ="text"
                            value ={this.state.Sex}
                            onChange={this.onChangeText}
                        />
                    </div>
                    <div className = "infor">
                        <h3 className ="word">Email</h3>
                        <input
                            name='Email'
                            className = "form1"
                            type ="text"
                            value ={this.state.Email}
                            onChange={this.onChangeText}
                        />
                    </div>
                    <div className = "infor">
                        <h3 className ="word">Số điện thoại</h3>
                        <input
                            name='Phone'
                            className = "form1"
                            type ="text"
                            value ={this.state.Phone}
                            onChange={this.onChangeText}
                        />
                    </div>
                    <div className = "infor">
                        <h3 className ="word">Số tài khoản</h3>
                        <input
                            name='STK'
                            className = "form1"
                            type ="text"
                            value ={this.state.STK}
                            onChange={this.onChangeText}
                        />
                    </div>
                    <div className="infor">
                        <button 
                            className ="delete" 
                            onClick={() => this.handleDeleteText()}>
                            Xóa tài khoản
                        </button>
                        <button className ="save"> Lưu</button>
                    </div>
                </div>
                <div className ='table'><Table/></div>
            </div>

        );
    }

}
export default EditStu;