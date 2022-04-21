import './App.css';
import Header from "./commponents/Header/Header";
import React from "react";
import {regularlyPage} from "./commponents/Utils/Constants";
import Main from "./commponents/Nav1/Main";
import Nav1 from "./commponents/Nav1/Nav1";
import Modal from "./commponents/Nav/Modal/Modal";

// const [modal, setModal] = useState
    class App1 extends React.Component {



        constructor(props) {
            super(props);
            this.state =
                {
                    activePage: regularlyPage
                }
        }


        changeActivePage = page => {
            this.setState({activePage: page})
        }


        render() {


            return (
                <div className="App">

                    <Header/>
                    <Nav1 changePage={this.changeActivePage}/>

                    <Main page={this.state.activePage}/>

                    <Modal
                        title={'darova ept'}
                        isOpened={false}
                        />
                </div>
            )
        }


}




export default App1;
