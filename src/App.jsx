import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Profile } from "./components/Profile";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header title={"Evenning-Check-Out"} />
      <main className="p-4">
        <Profile
          name={"Kasongo"}
          title={"Thief"}
          location={"Nairobi"}
          avatar={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNarWcg5j8UmFHsLxd_k4CUI-SfM9YbxBkxg&s"
          }
        />
      </main>
      <Footer message={"CopyRight ©"} />
    </div>
  );
}

export default App;
