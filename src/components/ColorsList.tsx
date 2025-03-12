import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createColor, fetchColors, removeColor } from "../store/colors/colorsSlice";
import { AppDispatch, RootState } from "../store/store";
import {
   AddButton,
   ColorItem,
   ColorList,
   Container,
   DeleteButton,
   Input,
   InputRow,
   SearchInput,
   Title,
} from "./ColorsList.styled";

const ColorsList = () => {
   const dispatch = useDispatch<AppDispatch>();
   const [name, setName] = useState("");
   const [hex, setHex] = useState("");

   const [search, setSearch] = useState("");

   const { colors } = useSelector((state: RootState) => state.colors);

   useEffect(() => {
      dispatch(fetchColors());
   }, [dispatch]);

   const handleAddColor = () => {
      if (name && hex) {
         dispatch(createColor({ name, hex }));
         setName("");
         setHex("");
      }
   };

   const filteredColors = colors.filter((color) => color.name.toLowerCase().includes(search.toLowerCase()));

   return (
      <>
         <Container>
            <Title>Color Console</Title>
            <SearchInput
               type="search"
               placeholder="Search color..."
               value={search}
               onChange={(e) => setSearch(e.target.value)}
            />
            <InputRow>
               <Input placeholder="Color Name" value={name} onChange={(e) => setName(e.target.value)} />
               <Input placeholder="#Hex Value" value={hex} onChange={(e) => setHex(e.target.value)} />
            </InputRow>
            <AddButton onClick={handleAddColor}>Add Color</AddButton>
            <ColorList>
               {filteredColors.map((color) => (
                  <ColorItem key={color.id} style={{ background: color.hex }}>
                     {color.name}
                     <DeleteButton onClick={() => dispatch(removeColor(color.id))}>X</DeleteButton>
                  </ColorItem>
               ))}
            </ColorList>
         </Container>
      </>
   );
};

export default ColorsList;
