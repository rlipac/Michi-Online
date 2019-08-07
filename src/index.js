import React from 'react';
import ReactDOM from 'react-dom';
import Cabeza from './component/Cabeza';
import Game from './component/Game'
import 'bootstrap/dist/css/bootstrap.css'




ReactDOM.render(
                    <div>
                        <Cabeza/>                
                        <Game className="text-center" />              
                    </div>,  document.getElementById('root')
                    
                 );
                
               


