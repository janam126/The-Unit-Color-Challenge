import styled from "styled-components";

export const Container = styled.div`
   width: 600px;
   height: 600px;
   background: #1a1a1a;
   border-radius: 10px;
   padding: 20px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   box-shadow: 0 0 15px rgba(255, 0, 255, 0.5);
`;

export const Title = styled.h2`
   color: #a855f7;
   font-size: 20px;
   text-transform: uppercase;
   margin-bottom: 10px;
`;

export const SearchInput = styled.input`
   width: 90%;
   padding: 10px;
   background: #222;
   border: 1px solid #a855f7;
   color: #fff;
   border-radius: 5px;
   margin-bottom: 10px;
   transition: all 0.3s ease-in-out;

   &::placeholder {
      color: #a855f7;
   }

   &:focus {
      outline: none;
      border-color: #c084fc;
      box-shadow: 0 0 10px rgba(168, 85, 247, 0.8);
      transform: scale(1.05);
   }
`;

export const InputRow = styled.div`
   width: 90%;
   display: flex;
   gap: 10px;
`;

export const Input = styled.input`
   flex: 1;
   padding: 10px;
   background: #222;
   border: 1px solid #a855f7;
   color: #fff;
   border-radius: 5px;
   transition: all 0.3s ease-in-out;

   &::placeholder {
      color: #a855f7;
   }

   &:focus {
      outline: none;
      border-color: #c084fc;
      box-shadow: 0 0 10px rgba(168, 85, 247, 0.8);
      transform: scale(1.02);
   }
`;

export const AddButton = styled.button`
   width: 90%;
   padding: 10px;
   background: #a855f7;
   border: none;
   color: #fff;
   font-weight: bold;
   border-radius: 5px;
   cursor: pointer;
   transition: 0.3s;
   &:hover {
      background: #c084fc;
   }
`;

export const ColorList = styled.div`
   width: 100%;
   height: 320px;
   overflow-y: auto;
   display: flex;
   flex-direction: column;
   gap: 5px;
   padding: 10px;
   border-radius: 5px;
   background: #111;
   box-shadow: inset 0 0 10px rgba(255, 0, 255, 0.3);

   &::-webkit-scrollbar {
      display: none;
   }

   scrollbar-width: none;
`;

export const ColorItem = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 7px;
   color: white;
   border-radius: 5px;
   font-weight: bold;
   text-transform: uppercase;
   box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);

   transition: all 0.3s ease-in-out;

   &:hover {
      transform: scale(1.03);
   }
`;

export const DeleteButton = styled.button`
   background: transparent;
   border: none;
   color: white;
   font-weight: bold;
   padding: 5px 10px;
   border-radius: 5px;
   cursor: pointer;
   transition: 0.3s;
`;
