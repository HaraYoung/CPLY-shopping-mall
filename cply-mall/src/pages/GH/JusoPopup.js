// import React, { memo } from 'react';
// import styled from 'styled-components';
// import { getJuso } from '../../slices/KH/jusoSlice';
// import {useDispatch} from 'react-redux';
// import DaumPostcode from 'react-daum-postcode';
// import { useNavigate } from 'react-router-dom';
// import RegexHelper from '../../libs/RegexHelper';
// const JusoPopupCss = styled.div`
//     width: 430px;
//     height: 500px;
//     >.title-box {
//         background: #000;
//         padding: 20px 0;
//         >h2{
//             padding-left: 20px;
//             margin: 0;
//             color: #fff;
//         }
//     }
//     .juso-box {
//         .juso-box-div {
//             padding: 20px;
//             margin-top: 20px;
//             border-top: 1px solid #000;
//             border-bottom: 1px solid #000;
//             span {
//                 width: 40%;
//                 border: 1px solid #34b4eb;
//                 color: #34b4eb;
//                 font-size: 11px;
//                 padding: 2px 4px;
//                 margin-right: 5px;
                
//             }
//             >div {
//                 width: 100%;
//                 input {
//                     width: 60%;
//                     border-radius:5px;
//                     margin-right: 5px;
//                     padding: 5px 10px;
//                 }
//                 button {
//                     color: #fff;
//                     background: #000;
//                     border-radius: 5px;
//                     padding: 5px 20px;
//                 }
//             }
//         }
//         >button {

//             color: #fff;
//             background-color: #000;
//             border-radius: 5px;
//             padding: 5px 10px;
//             display: block;
//             margin: auto;
//             margin-top: 30px;
//         }
//     }
// `;


// const JusoPopup = memo(() => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const [daumJuso,setDaumJuso] = React.useState({
//         add:'',
//         zonecode:'',
//     })
//     const inputRef = React.useRef();
    

//     const onClick = React.useCallback((e)=> {
//         console.log (e);
//         setDaumJuso({
//             add:e.address,
//             zonecode:e.zonecode
//         })
//     },[setDaumJuso])
//     const gohome = React.useCallback(()=> {
//         navigate('/juso');
//     })
//     const addr2 = React.useCallback(()=> {
//         const current = inputRef.current
//         try {
//             RegexHelper.value(current,'나머지 주소를 입력하세요');
//         }catch(e) {
//             window.alert(e.message);
//             e.field.focus();
//             return;
//         }
//         dispatch(getJuso({
//             add:daumJuso.add,
//             add2:current.value,
//             zonecode:daumJuso.zonecode
//         }))

//     },[daumJuso,dispatch])
//     return (
//         <JusoPopupCss>
//             <div className='title-box'>
//                 <h2>주소찾기</h2>
//             </div>
//             <div>
//                 <DaumPostcode onComplete={onClick} />
//                 {daumJuso.add && (
//                     <div className='juso-box'>
//                     <div className='juso-box-div'>
//                         <h4><span>우편번호</span>{daumJuso.zonecode}</h4>
//                         <h4><span>도로명</span>{daumJuso.add}</h4>
//                         <div>
//                         <input type='text' placeholder='나머지 주소' ref={inputRef}/>
//                         <button onClick={addr2}>확인</button>
//                         </div>
//                     </div>
//                     <button onClick={gohome}>뒤로 이동</button>
//                     </div>
//                 )}
//             </div>
//         </JusoPopupCss>
//     );
// });

// export default JusoPopup;
import React, { memo,useEffect } from 'react';

const JusoPopup = memo(() => {
    useEffect(()=> {
        const jquery = document.createElement("script");
        jquery.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
        const iamport = document.createElement('script');
        iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
        document.head.appendChild(jquery);
        document.head.appendChild(iamport);

        return()=> {
            document.head.removeChild(jquery); document.head.removeChild(iamport);
        }
    },[]);

    const onClickPayment =()=> {
        const {IMP} = window; IMP.init('imp76184821');
        const data = {
            pg: "html5_inicis",
            pay_ment:'card',
            merchant_uid:`mid_${new Date().getTime()}`,
            name:'결제테스트',
            amount:'100',
            custom_data:{name:'부가정보',desc:'세부 부가정보'},
            buyer_name:'임기원',
            buyer_tel:'01012345678',
            buyer_email:'1234@naver.com',
            buyer_addr:'강동구성내2동',
            buyer_postalcode:'05232'
        };
        IMP.request_pay(data,callback);
        IMP.close();
    }
    const callback =(response)=> {
        const{success,error_msg,imp_uid,merchant_uid,pay_ment,paid_amount,status}= response;
        if (success) {
            alert('결제성공')
        }else {
            alert(`결제 실패 : ${error_msg}`);
        }
    }
    return (
        <div>
            <button onClick={onClickPayment}>결제하기</button>
        </div>
    );
});

export default JusoPopup;