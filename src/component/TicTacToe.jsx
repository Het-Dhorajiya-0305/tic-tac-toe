import React from 'react'
import { useState, useRef } from 'react';
import circle_img from '../assets/circle.svg'
import cross_img from '../assets/cross.svg'
import './tic_tac_toe.css';
let box = ['', '', '', '', '', '', '', '', ''];

function TicTacToe() {
    
    const [Lock, setLock] = useState(false);
    const [count, setCount] = useState(0);
    const title_ref=useRef(null);
    const box0=useRef(null);
    const box1=useRef(null);
    const box2=useRef(null);
    const box3=useRef(null);
    const box4=useRef(null);
    const box5=useRef(null);
    const box6=useRef(null);
    const box7=useRef(null);
    const box8=useRef(null);
    
    const basket=[box0,box1,box2,box3,box4,box5,box6,box7,box8]

    function toggle(e, index) {
        if (Lock) {
            return 0;
        }
        if (count % 2 == 0) {
            e.target.innerHTML = `<img src=${circle_img} alt=cross/>`;
            setCount(c => c + 1);
            box[index] = 'O';
        }
        else {
            e.target.innerHTML = `<img src=${cross_img} alt=cross/>`;
            setCount(c => c + 1);
            box[index] = 'X';
        }
        checkwinner();
    }
    function checkwinner() {

        console.log("hello");
        if (box[0] == box[1] && box[1] == box[2] && box[2] != '') {
            win(box[2]);
        }
        else if (box[3] == box[4] && box[4] == box[5] && box[5] != '') {
            win(box[5]);
        }
        else  if (box[6] == box[7] && box[7] == box[8] && box[8] != '') {
            win(box[8]);
        }
        else if (box[0] == box[3] && box[3] == box[6] && box[6] != '') {
            win(box[6]);
        }
        else if (box[0] == box[4] && box[4] == box[8] && box[8] != '') {
            win(box[8]);
        }
        else if (box[1] == box[4] && box[4] == box[7] && box[7] != '') {
            win(box[7]);
        }
        else if (box[2] == box[5] && box[5] == box[8] && box[8] != '') {
            win(box[8]);
        }
        else if (box[2] == box[4] && box[4] == box[6] && box[6] != '') {
            win(box[6]);
        }
        else if (box[0] == box[3] && box[3] == box[6] && box[6] != '') {
            win(box[6]);
        }
    }

    function win(data) {
        setLock(true);
        console.log("call");
        title_ref.current.textContent=`Congratulation : ${data} is win the match`;
    }

    function handleClick()
    {
        title_ref.current.textContent="Tic Tac Toe";
        setLock(false);
        box=['','','','','','','','',''];
        basket.map((e)=>{
            e.current.innerHTML='';
        })
    }
    return (
        <div className='main'>
            <h1 className='title' ref={title_ref}>Tic Tac Toe</h1>
            <div className="board">
                <div className="row1 row">
                    <div className="boxes" ref={box0} onClick={(e) => { toggle(e, 0) }}><img src="" alt="" /></div>
                    <div className="boxes" ref={box1} onClick={(e) => { toggle(e, 1) }}></div>
                    <div className="boxes" ref={box2} onClick={(e) => { toggle(e, 2) }}></div>
                </div>
                <div className="row2 row">
                    <div className="boxes" ref={box3} onClick={(e) => { toggle(e, 3) }}></div>
                    <div className="boxes" ref={box4} onClick={(e) => { toggle(e, 4) }}></div>
                    <div className="boxes" ref={box5} onClick={(e) => { toggle(e, 5) }}></div>
                </div>
                <div className="row3 row">
                    <div className="boxes" ref={box6} onClick={(e) => { toggle(e, 6) }}></div>
                    <div className="boxes" ref={box7} onClick={(e) => { toggle(e, 7) }}></div>
                    <div className="boxes" ref={box8} onClick={(e) => { toggle(e, 8) }}></div>
                </div>
            </div>
            <button className='btn' onClick={handleClick}>Reset</button>
        </div>
    )
}

export default TicTacToe
