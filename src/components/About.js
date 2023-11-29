import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{

    constructor(props){
        super(props);

        // console.log("Parent constructor is Called");
    }

    componentDidMount(){
        // console.log("Parent CDM is called");
    }
    render(){
        // console.log("Parent Render is Called");
        return(
            <div>
            <h1>About Page</h1>
            <h2>This is Namaste React About Page</h2>

            {/* <User name={"Satish Adhikari (function)"} /> */}

            <UserClass name={"Satish Adhikari (class)"} />
            
        </div>
        )
    }
};

export default About;
