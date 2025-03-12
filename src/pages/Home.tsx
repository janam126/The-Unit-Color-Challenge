import ColorsList from "../components/ColorsList";

const Home = () => {
   return (
      <div className="container mx-auto p-4">
         <h1 className="text-3xl font-bold mb-4">Color Management</h1>
         <ColorsList />
      </div>
   );
};

export default Home;
