import { Card } from "../../components/CardProduct";
import { Header } from "../../components/Header";

export const Home = () => {
  return (
    <div>
      <Header/>
     <main className="w-full gap-4 mx-auto max-w-7xl">
        <h1 className="text-2xl text-center">e-commerce</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <Card/>
        </div>
     </main>
    </div>
  );
};
