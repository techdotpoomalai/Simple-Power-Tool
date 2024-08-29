import React, { Component } from 'react';
import axios from 'axios';

const baseurl = "http://127.0.0.1:8000";

export default class Server extends Component{

    test(){
        window.alert("works")
    }

    file_upload(data){
       
        return axios.post(baseurl+"/file_upload",data);
    }

}