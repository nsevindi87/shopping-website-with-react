import React from 'react';
import {moneyFormat} from '../helpers.js';

function Header({pTotal, pMoney}) {
  return (
    <>
        {pTotal>0 && pMoney - pTotal !== 0 && (
                <div className='header'>Harcayacak <span>$ {moneyFormat(pMoney - pTotal)}</span> paraniz var!</div>
        )}
        {pTotal ===0 && (
                <div className='header'>Harcamak icin <span>$ {moneyFormat(pMoney)}</span> paraniz var!</div>
        )}
        {pMoney - pTotal === 0 && (
                <div className='header'>Paran bitti!</div>
        )}
        <style jsx>{`
        .header{
            left:0;
            background: linear-gradient(to bottom, #20b820, #14be2a);
            height:60px;
            display:flex;
            align-items:center;
            justify-content:center;
            color:#fff;
            font-size:24px;
            letter-spacing:1px
        }
        .header span{
            margin: 0 10px;
            font-weight:bold;
        }
        `}</style>
    </>
  )
}

export default Header
