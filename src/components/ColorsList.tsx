import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { createColor, fetchColors, removeColor } from "../store/colors/colorsSlice";
import { AppDispatch, RootState } from "../store/store";
import { validateColor } from "../utils/validateColor";
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
   const [removingId, setRemovingId] = useState("");
   const [search, setSearch] = useState("");

   const { colors } = useSelector((state: RootState) => state.colors);

   const handleRemove = (id: string) => {
      setRemovingId(id);
      setTimeout(() => {
         dispatch(removeColor(id));
         toast.success(`The color is successfully deleted!`);
         setRemovingId("");
      }, 300);
   };

   const onAddColor = async () => {
      const isValid = await validateColor(name, hex);
      if (isValid) {
         dispatch(createColor({ name, hex }));
         toast.success(`The color ${name} is successfully added!`);
         setName("");
         setHex("");
      }
   };

   const filteredColors = colors.filter((color) => color.name.toLowerCase().includes(search.toLowerCase()));

   useEffect(() => {
      dispatch(fetchColors());
   }, [dispatch]);

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
            <AddButton onClick={onAddColor} disabled={name == "" || hex == ""}>
               Add Color
            </AddButton>
            <ColorList>
               {filteredColors.map((color) => (
                  <ColorItem key={color.id} style={{ background: color.hex }} $isRemoving={removingId === color.id}>
                     {color.name}
                     <DeleteButton onClick={() => handleRemove(color.id)}>X</DeleteButton>
                  </ColorItem>
               ))}
            </ColorList>
         </Container>
         <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </>
   );
};

export default ColorsList;
