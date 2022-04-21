import './App.css';
import Header from "./commponents/Header/Header";
import React, {useState} from "react";
import { regularlyPage} from "./commponents/Utils/Constants";
import Main from "./commponents/Nav1/Main";
import Nav1 from "./commponents/Nav1/Nav1";
import Modal from "./commponents/Nav/Modal/Modal";
import Modal1 from "./commponents/Nav/Modal/Modal1";



const App = () => {

    const [page, setPage] = useState(regularlyPage)
    const [modal, setModal] = useState(false)
    const [modal1, setModal1] = useState(false)

// =======================
    const setModalState = () => {
        setModal(true)
    }

    const setModalClose = () => {
        setModal(false)
    }

    const setModalState1 = () => {
        setModal1(true)
    }

    const setModalClose1 = () => {
        setModal1(false)
    }

    const changeActivePage = (page) => {
        setPage(page)
    }






    return (
        <div className="a">



            <Header modal={setModalState} modal1={setModalState1}  />
            <Nav1 changePage={changeActivePage}/>
            <Main page={page}/>
            <Modal
                title={'Registration'}
                isOpened={modal}
                onModalClose={setModalClose}
            />

            <Modal1
                title={'Feedback'}

                isOpened={modal1}
                onModalClose={setModalClose1}
            />


        </div>
    );
};

export default App;