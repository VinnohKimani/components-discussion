import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Profile } from "./components/Profile";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header title={"Profiles-Demos"} />
      <main className="p-4">
        <Profile
          name={"Kasongo"}
          title={"Thief"}
          location={"Nairobi-Kenya"}
          avatar={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNarWcg5j8UmFHsLxd_k4CUI-SfM9YbxBkxg&s"
          }
        />
        <Profile
          name={"Route 66"}
          title={"Mother-Road"}
          location={"Chicago,Illinois, to Santa Monica, California"}
          avatar={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy6PdM-tNr9qBOHzOZ6uxZWFak1AA3Gnumwg&s"
          }
        />
        <Profile
          name={"Lionel Messi"}
          title={"GOAT"}
          location={"Fort Lauderdale, Florida, USA"}
          avatar={
            "https://imageio.forbes.com/specials-images/imageserve/663e595b4509f97fdafb95f5/0x0.jpg?format=jpg&crop=383,383,x1045,y23,safe&height=416&width=416&fit=bounds"
          }
        />
      </main>
      <Footer message={"CopyRight ©"} />
    </div>
  );
}

export default App;
